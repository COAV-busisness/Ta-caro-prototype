import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import Navbar from './Navbar';

type Props = PropsWithChildren<{ title?: string; description?: string }>;

export default function Layout({ children, title='Tá Caro!', description='Compare preços entre lojas' }: Props) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-[color:var(--tacaro-red)] text-white sticky top-0 z-50 header-shadow">
          <div className="container-custom flex items-center justify-between py-4">
            <Navbar />
          </div>
        </header>
        <main className="flex-1 container-custom py-8">
          {children}
        </main>
        <footer className="bg-[color:var(--tacaro-gray-dark)] text-white py-4">
          <div className="container-custom text-center">
            <p>&reg;Copyright 2025 Tá Caro Possui Todos seus direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
