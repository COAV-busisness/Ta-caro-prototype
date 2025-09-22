import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import AdContainer from "../components/AdContainer";
import React, { useState } from "react";

export default function Comparison() {
  const [active, setActive] = useState("Loja x Bairro");
  return (
    <Layout title="Comparar - Tá Caro!">
      <h2 className="text-2xl font-semibold mb-4">Comparação de Preços</h2>

      <Tabs
        tabs={["Loja x Bairro", "Loja x Cidade"]}
        active={active}
        onChange={(t) => setActive(t)}
      />

      <AdContainer />

      <h3 className="text-lg font-medium mt-4">Resultados para "Arroz 5kg"</h3>
      <table className="w-full border-collapse mt-3">
        <thead>
          <tr className="bg-[color:var(--tacaro-gray-light)]">
            <th className="p-3 text-left">Loja</th>
            <th className="p-3 text-left">Bairro</th>
            <th className="p-3 text-left">Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-yellow-50 font-semibold">
            <td className="p-3">Super Economia</td>
            <td className="p-3">Centro</td>
            <td className="p-3">R$ 18,90</td>
          </tr>
          <tr>
            <td className="p-3">Mercado Preço Baixo</td>
            <td className="p-3">Jardins</td>
            <td className="p-3">R$ 19,50</td>
          </tr>
          <tr>
            <td className="p-3">Atacadão</td>
            <td className="p-3">Vila Nova</td>
            <td className="p-3">R$ 19,90</td>
          </tr>
          <tr>
            <td className="p-3">Supermercado Total</td>
            <td className="p-3">Centro</td>
            <td className="p-3">R$ 20,50</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <h3>Loja mais barata do mês: Super Economia</h3>
      </div>
      <AdContainer />
    </Layout>
  );
}
