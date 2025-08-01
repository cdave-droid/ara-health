import React from "react";

export default function VerticalGlassyConnector({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pointer-events-none ${className}`}
    >
      {/* Solid vertical line connecting centre card to Current Reality */}
      <div 
        className="bg-gray-300 dark:bg-gray-600 w-1" 
        style={{ height: '400px' }}
      />
    </div>
  );
}
