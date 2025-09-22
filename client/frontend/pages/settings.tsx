import Layout from '../components/Layout';
import React from 'react';

export default function Settings() {
  return (
    <Layout title="Configurações - Tá Caro!">
      <h2 className="text-2xl font-semibold mb-4">Configurações</h2>

      <div className="mb-4">
        <ul className="flex gap-4 border-b pb-2">
          <li className="font-medium border-b-4 border-[color:var(--tacaro-red)]">Conta</li>
          <li className="text-gray-500">Notificações</li>
          <li className="text-gray-500">Privacidade</li>
        </ul>
      </div>

      <div className="max-w-xl">
        <div className="mb-4">
          <label className="block mb-2">E-mail</label>
          <input className="w-full p-3 border rounded" defaultValue="usuario@exemplo.com" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Alterar Senha</label>
          <input className="w-full p-3 border rounded" placeholder="Nova senha" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confirmar Nova Senha</label>
          <input className="w-full p-3 border rounded" placeholder="Confirmar nova senha" />
        </div>
        <button className="bg-[color:var(--tacaro-yellow)] text-[color:var(--tacaro-red)] rounded-full py-2 px-4 font-bold">Salvar Alterações</button>

        <div className="mt-6">
          <button className="bg-red-500 text-white rounded-full py-2 px-4">Excluir Conta</button>
        </div>
      </div>
    </Layout>
  );
}
