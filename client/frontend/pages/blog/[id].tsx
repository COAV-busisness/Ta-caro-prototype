import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import posts from '../../data/posts.json';
import React from 'react';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p:any) => String(p.id) === String(id));
  if (!post) {
    return (
      <Layout title="Artigo não encontrado - Tá Caro!">
        <div className="card-base">
          <h2>Artigo não encontrado</h2>
        </div>
      </Layout>
    );
  }
  return (
    <Layout title={`${post.title} - Tá Caro!`}>
      <div className="card-base">
        <h1 className="text-2xl font-bold text-[color:var(--tacaro-red)]">{post.title}</h1>
        <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('pt-BR')}</p>
        <div className="mt-4">
          <p>{post.summary}</p>
          <p className="mt-4 text-gray-600">(Conteúdo demo. Aqui você colocaria o texto completo do artigo.)</p>
        </div>
      </div>
    </Layout>
  );
}
