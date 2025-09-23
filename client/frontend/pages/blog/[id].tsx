import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import posts from "../../data/posts.json";
import React from "react";
import AdContainer from "../../components/AdContainer";
import AdFixedCard from "../../components/AdFixedContainer";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p: any) => String(p.id) === String(id));
  if (!post) {
    return (
        <Layout title="Artigo não encontrado - Tá Caro!">
           <AdContainer />
          <div className="card-base">
            <h2>Artigo não encontrado</h2>
          </div>

          <AdFixedCard />
        </Layout>
    );
  }
  return (
    <Layout title={`${post.title} - Tá Caro!`}>
      <AdContainer />
      <div className="card-base">
        <h1 className="text-2xl font-bold text-[color:var(--tacaro-red)]">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString("pt-BR")}
        </p>
        <div className="mt-4">
          <p>{post.summary}</p>
          <p className="mt-4 text-gray-600">
            (Conteúdo demo. Aqui você colocaria o texto completo do artigo.)
          </p>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <AdContainer />
      </div>
    </Layout>
  );
}
