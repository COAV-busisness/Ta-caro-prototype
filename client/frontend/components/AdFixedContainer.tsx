// components/AdFixedCard.tsx
import React from "react";

export default function AdFixedCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="fixed bottom-12 right-12 z-50 w-64 shadow-lg rounded-lg bg-white border border-gray-200">
      <div className="px-3 py-2 border-b border-gray-100 text-xs font-medium text-gray-500">
        Publicidade
      </div>
      {/* https://legacy.reactjs.org/docs/composition-vs-inheritance.html#children
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing */}
      <div className="p-12 text-center text-sm text-gray-600">
        {children ?? "Google AdSense"}
      </div>
    </div>
  );
}
