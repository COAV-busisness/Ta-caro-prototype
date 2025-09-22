import React from 'react';

export default function AdContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="ad-box mb-6">
      <div className="text-sm text-[#888] mb-2">Publicidade</div>
      <div className="bg-[#f0f0f0] rounded p-6 text-[#888]">{children ?? 'Google AdSense'}</div>
    </div>
  );
}
