import Layout from "../components/Layout";
import Link from "next/link";
import posts from "../data/posts.json";
import AdFixedCard from "../components/AdFixedContainer";
import AdContainer from "../components/AdContainer";

export default function Blog() {
  return (
    <Layout title="Blog - Tá Caro!">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="mb-6">
        Últimos artigos e dicas para economizar — em português.
      </p>
      <AdContainer />
      <AdFixedCard />
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post: any) => (
          <div key={post.id} className="card-base">
            <h2 className="text-xl font-semibold text-[color:var(--tacaro-red)]">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{post.summary}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(post.date).toLocaleDateString("pt-BR")}
            </p>
            <div className="mt-3">
              <Link href={`/blog/${post.id}`}>
                <p className="inline-block bg-[color:var(--tacaro-red)] text-white px-4 py-2 rounded">
                  Leia mais
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
