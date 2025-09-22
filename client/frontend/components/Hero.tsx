import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[color:var(--tacaro-red)] to-[#a00] text-white rounded-lg p-10 text-center mb-6">
      <h1 className="text-3xl font-bold mb-4">Encontre os melhores preços perto de você</h1>
      <p className="max-w-xl mx-auto mb-6">Compare produtos entre diferentes lojas, bairros e cidades para economizar no seu dia a dia</p>
      <Link href="/search"><p className="inline-block bg-[color:var(--tacaro-yellow)] text-[color:var(--tacaro-red)] py-3 px-6 rounded-full font-bold">Buscar Produtos</p></Link>
    </section>
  );
}
