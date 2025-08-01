import React from "react";

export default function GlassyConnector({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Horizontal lines only in the gaps between cards */}
      {/* Left gap (between card 1 and card 2) */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gray-300 dark:bg-gray-600" />
      {/* Right gap (between card 2 and card 3) */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gray-300 dark:bg-gray-600" />
    </div>
  );
}
