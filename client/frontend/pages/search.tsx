import Layout from '../components/Layout';
import AdContainer from '../components/AdContainer';
import React from 'react';

export default function Search() {
  return (
    <Layout title="Buscar - Tá Caro!">
      <div className="text-center py-6">
        <h2 className="text-2xl font-semibold mb-4">O que você está procurando?</h2>
        <div className="max-w-xl mx-auto relative">
          <input className="w-full p-4 border-2 rounded-full border-[color:var(--tacaro-gray)] focus:border-[color:var(--tacaro-red)]" placeholder="Digite o nome do produto..." />
          <button className="absolute right-2 top-2 bg-[color:var(--tacaro-red)] text-white px-4 py-2 rounded-full">Buscar</button>
        </div>
      </div>

      <AdContainer />
    </Layout>
  );
}
