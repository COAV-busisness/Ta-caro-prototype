// https://nextjs-org.translate.goog/docs/pages/building-your-application/routing/custom-error?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Coluna de texto */}
      <div className="flex flex-col justify-center px-8 py-16 lg:px-24">
        <p className="text-sm font-semibold text-[#D91E2E]">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-semibold text-[#D91E2E] hover:text-[#D91E2E]/80"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="relative hidden lg:block">
        <Image
          src={
            "https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          } // coloque sua imagem aqui dentro da pasta public
          alt="Pessoa andando no deserto"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
