import React from "react";

export default function VerticalGlassyConnector({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pointer-events-none ${className}`}
    >
      {/* Solid vertical line connecting centre card to Current Reality */}
      <div className="bg-gray-300 dark:bg-gray-600 w-1 h-40 sm:h-48 md:h-56 -translate-y-8 sm:-translate-y-12 md:-translate-y-20" />
    </div>
  );
}
