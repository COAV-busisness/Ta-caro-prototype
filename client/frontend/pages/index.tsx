import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AdContainer from "../components/AdContainer";
import React from "react";
import AdFixedContainer from "../components/AdFixedContainer";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Tá Caro! - Início" description="Compare preços entre lojas">
      <Hero />
      <AdContainer />

      <h2 className="text-xl font-semibold mb-4">
        Compare preços em todo Brasil
      </h2>
      <div className="card-base mb-6 h-[400px] relative">
        <div className="w-full h-full bg-[#e9e9e9] rounded flex items-center justify-center">
          Mapa do Brasil com ícones de lojas
        </div>

        <AdFixedContainer />
        {/* store icons */}
        <i className="store-icon absolute" style={{ top: "30%", left: "25%" }}>
          <i className="fas fa-store"></i>
        </i>
        <i className="store-icon absolute" style={{ top: "40%", left: "30%" }}>
          <i className="fas fa-store"></i>
        </i>
        <i className="store-icon absolute" style={{ top: "50%", left: "40%" }}>
          <i className="fas fa-store"></i>
        </i>
        <i className="store-icon absolute" style={{ top: "60%", left: "50%" }}>
          <i className="fas fa-store"></i>
        </i>
        <i className="store-icon absolute" style={{ top: "45%", left: "60%" }}>
          <i className="fas fa-store"></i>
        </i>
        <i className="store-icon absolute" style={{ top: "65%", left: "45%" }}>
          <i className="fas fa-store"></i>
        </i>
      </div>

      <AdContainer />

      {/* Section Blog */}
      <section className="container-custom my-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[color:var(--tacaro-red)]">
            Acompanhe nosso Blog
          </h2>
          <p className="mb-6 text-lg text-[color:var(--tacaro-gray-dark)]">
            Fique por dentro de dicas, análises de mercado e novidades sobre o
            mundo dos preços e do consumo inteligente.
          </p>
          <Link href="/blog" className="btn">
            Visitar Blog
          </Link>
        </div>
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Pessoa lendo artigos no laptop"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </section>

      {/* Section App Download */}
      <section className="bg-[color:var(--tacaro-gray-light)] py-16">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[color:var(--tacaro-red)]">
              Baixe o App Tá Caro!
            </h2>
            <p className="mb-6 text-lg text-[color:var(--tacaro-gray-dark)]">
              Compare preços de produtos alimentícios no varejo e atacado,
              economize tempo e faça escolhas mais inteligentes.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[color:var(--tacaro-red)] text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-[color:var(--tacaro-yellow)] hover:text-[color:var(--tacaro-red)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M325.3 234.3L104.6 22.1C98.5 16.2 88 20.4 88 28.8v454.4c0 8.4 10.5 12.6 16.6 6.7l220.7-212.2c8.4-8.1 8.4-21.3 0-29.4zM349.9 259.1l52.4 50.3L115.4 484.7l234.5-225.6zM402.3 202.6l-52.4 50.3L115.4 27.3 402.3 202.6zM437.1 256l59.2 56.8c8.4 8.1 8.4 21.3 0 29.4l-59.2 56.8V256z" />
              </svg>
              Google Play
            </a>
          </div>
          <div className="relative">
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1682089105204-ac022cc290ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="App de comparação de preços em uso"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
