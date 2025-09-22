import Layout from '../components/Layout';
import Card from '../components/Card';
import AdContainer from '../components/AdContainer';

export default function Dashboard() {
  return (
    <Layout title="Dashboard - Tá Caro!">
      <h2 className="text-2xl font-semibold mb-4">Dashboard de Economia</h2>

      <AdContainer />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card title="Lojas mais baratas">
          <ol className="list-decimal pl-5">
            <li>Super Economia - Economia de 15%</li>
            <li>Mercado Preço Baixo - Economia de 12%</li>
            <li>Atacadão - Economia de 10%</li>
          </ol>
        </Card>

        <Card title="Bairros mais baratos">
          <ol className="list-decimal pl-5">
            <li>Centro - Preço médio 5% abaixo</li>
            <li>Vila Nova - Preço médio 3% abaixo</li>
            <li>Jardins - Preço médio 2% abaixo</li>
          </ol>
        </Card>

        <Card title="Itens mais baratos">
          <ol className="list-decimal pl-5">
            <li>Arroz 5kg - R$ 18,90</li>
            <li>Feijão 1kg - R$ 7,50</li>
            <li>Óleo de Soja - R$ 5,80</li>
          </ol>
        </Card>
      </div>

      <AdContainer />
    </Layout>
  )
}
