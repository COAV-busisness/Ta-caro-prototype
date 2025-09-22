import Link from 'next/link';
import React from 'react';
import UserAvatar from './UserAvatar';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <i className="fas fa-store text-[color:var(--tacaro-yellow)] text-2xl"></i>
        <span className="text-2xl font-bold">Tá Caro!</span>
      </div>

      <nav>
        <ul className="flex gap-6">
          <li><Link href="/"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">Início</p></Link></li>
          <li><Link href="/search"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">Buscar</p></Link></li>
          <li><Link href="/comparison"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">Comparar</p></Link></li>
          <li><Link href="/dashboard"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">Dashboard</p></Link></li>
          <li><Link href="/blog"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">blog</p></Link></li>
          <li><Link href="/login"><p className="font-medium text-white hover:text-[color:var(--tacaro-yellow)]">Entrar</p></Link></li>
        </ul>
      </nav>

      <UserAvatar />
    </div>
  )
}
