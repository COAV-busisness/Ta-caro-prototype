import React from 'react';

export default function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t:string)=>void }) {
  return (
    <div className="flex gap-2 mb-4">
      {tabs.map(t => (
        <button key={t} onClick={()=>onChange(t)} className={`px-4 py-2 rounded-t ${active===t ? 'bg-[color:var(--tacaro-red)] text-white' : 'bg-[color:var(--tacaro-gray)]'}`}>
          {t}
        </button>
      ))}
    </div>
  );
}
