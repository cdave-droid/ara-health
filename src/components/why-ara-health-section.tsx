"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Heart, Zap, Lock } from "lucide-react";

// ScrollStack Components
import { useLayoutEffect, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    );
    const endElement = scroller.querySelector(".scroll-stack-end");
    const endElementTop = endElement ? endElement.offsetTop : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = card.offsetTop;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardsRef.current[j].offsetTop;
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector(".scroll-stack-inner"),
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        willChange: "scroll-position",
      }}
    >
      <div className="scroll-stack-inner pt-[20vh] px-20 pb-[20rem] min-h-screen">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default function WhyAraHealthSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Section text animations - appears, holds, then scrolls up (no fade out)
  const textY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 1]);

  return (
    <section ref={containerRef} className="py-80 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Text - Appears, holds, then scrolls up */}
        <motion.div
          className="text-center mb-56"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-ara-navy mb-12 leading-tight">
            Why Ara Health?
          </h2>
        </motion.div>

        {/* Scroll Stack Component */}
        <div className="h-[600px]">
          <ScrollStack
            itemDistance={120}
            itemScale={0.05}
            itemStackDistance={40}
            stackPosition="50%"
            scaleEndPosition="25%"
            baseScale={0.8}
            rotationAmount={2}
            blurAmount={2}
            onStackComplete={() => console.log("Stack animation completed")}
          >
            {/* Item 1 - Built on Open Standards */}
            <ScrollStackItem itemClassName="bg-white border border-ara-blue">
              <div className="flex items-start space-x-6 h-full">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ara-navy mb-4">
                    Built on Open Standards
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We&apos;re aligning with HL7 and SMART-on-FHIR so hospitals
                    don&apos;t need custom interfaces.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            {/* Item 2 - Patient-First */}
            <ScrollStackItem itemClassName="bg-white border border-ara-blue">
              <div className="flex items-start space-x-6 h-full">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ara-navy mb-4">
                    Patient-First
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Always. Patients and families keep a clear, shareable record
                    of critical medical decisions through a patient&apos;s
                    health care journey.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            {/* Item 3 - Clinician-Friendly */}
            <ScrollStackItem itemClassName="bg-white border border-ara-blue">
              <div className="flex items-start space-x-6 h-full">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ara-navy mb-4">
                    Clinician-Friendly
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Zero-click banner in the chart—information appears where and
                    when care teams already look.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            {/* Item 4 - Enterprise Grade Security */}
            <ScrollStackItem itemClassName="bg-white border border-ara-blue">
              <div className="flex items-start space-x-6 h-full">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-ara-navy to-ara-blue rounded-2xl flex items-center justify-center shadow-lg">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ara-navy mb-4">
                    Enterprise Grade Security
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    And HIPAA compliant, so your medical information is always
                    secure.
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
