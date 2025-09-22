import React from 'react';

export default function Card({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="card-base">
      <h3 className="text-[color:var(--tacaro-red)] mb-4 border-b border-tacaro-gray pb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
