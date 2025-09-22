import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UserAvatar() {
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  // show avatar only on dashboard/settings or when logged in - simple simulation
  useEffect(() => {
    if (router.pathname === '/dashboard' || router.pathname === '/settings') {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [router.pathname]);

  if (!visible) return <div />;

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setDropdown(s => !s)} className="user-avatar w-10 h-10 rounded-full bg-[color:var(--tacaro-yellow)] flex items-center justify-center text-[color:var(--tacaro-red)] font-bold">
        <i className="fas fa-user"></i>
      </button>
      <div className={`absolute right-0 mt-2 w-40 bg-white rounded shadow ${dropdown ? 'block' : 'hidden'}`}>
        <Link href="#" onClick={(e)=>{e.preventDefault(); router.push('/settings')}} className="block px-4 py-2 text-[color:var(--tacaro-gray-dark)]">Configurações</Link>
        <Link href="#" onClick={(e)=>{e.preventDefault(); setDropdown(false); router.push('/')}} className="block px-4 py-2 text-[color:var(--tacaro-gray-dark)]">Sair</Link>
      </div>
    </div>
  );
}
