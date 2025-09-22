# 📊 Tá Caro! [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Sass](https://img.shields.io/badge/Sass-SCSS-pink?style=flat-square&logo=sass)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

O **Tá Caro!** é um aplicativo web que ajuda usuários a **comparar preços e controlar gastos**, trazendo uma visão clara sobre onde e como estão consumindo.  
Atualmente desenvolvido em **Next.js + TypeScript + Sass**, mas com roadmap para **API própria** e **versão mobile** em **React Native + Expo**.

---

## ✨ Funcionalidades (em desenvolvimento)

✅ Estrutura inicial em **Next.js**  
✅ Páginas com autenticação (login, registro)  
✅ Layout e componentes reutilizáveis  
⬜ Comparação de preços e dashboard interativo  
⬜ Blog com dicas de consumo consciente  
⬜ API dedicada para integração de dados  
⬜ Versão mobile com **React Native + Expo**  

---

## 🚀 Tecnologias

### Frontend (atual)
- ⚡ [Next.js](https://nextjs.org/) — Framework React moderno
- 📘 [TypeScript](https://www.typescriptlang.org/) — Tipagem estática
- 🎨 [Sass (SCSS)](https://sass-lang.com/) — Estilos modulares
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Estilização rápida
- 🛠 [PostCSS](https://postcss.org/) — Processamento de CSS

### Futuro
- ⚙️ **API** → Node.js + Banco de dados (a definir)  
- 📱 **Mobile** → React Native + Expo  

---

## 📂 Estrutura de Pastas

frontend/
│── components/        # Componentes reutilizáveis (Navbar, Layout, Cards, etc.)
│── data/              # Dados estáticos / mocks
│── node_modules/      # Dependências
│── pages/             # Páginas do Next.js
│   ├── blog/          # Subpáginas do blog
│   ├── _app.tsx       # Componente principal
│   ├── index.tsx      # Página inicial
│   └── ...            # login.tsx, dashboard.tsx, settings.tsx, etc.
│── styles/            # Estilos (SCSS / módulos)
│   ├── authForm/      # Estilos do formulário de autenticação
│   ├── variables/     # _variables.scss
│   ├── globals.css    # Estilos globais
│── public/            # Assets públicos (imagens, ícones, fontes)
│── package.json       # Dependências e scripts
│── tailwind.config.js # Configuração do Tailwind (se usado)
│── tsconfig.json      # Configuração do TypeScript


📸 **Preview da Estrutura (VSCode)**  
> Prints da arquitetura de pastas exibida nos screenshots:  

![Estrutura 1](./docs/screenshots/print1.png)  
![Estrutura 2](./docs/screenshots/print2.png)  
![Estrutura 3](./docs/screenshots/print3.png)  

---

## 📦 Instalação e Uso

### Pré-requisitos
- [Node.js](https://nodejs.org/) >= 18
- npm ou pnpm

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ta-caro.git

# Entre no diretório
cd ta-caro/frontend

# Instale as dependências
npm install
# ou
pnpm install

# Rode o servidor de desenvolvimento
npm run dev
# ou
pnpm dev

👉 Acesse: http://localhost:3000

📅 Roadmap

 Estrutura inicial (Next + TS + Sass)

 Autenticação completa

 API dedicada

 Versão Mobile (React Native + Expo)

 Deploy em produção

👨‍💻 Autor

Leonardo Sousa

Projeto criado e mantido por Leonardo Sousa.

GitHub: @LeonardoSousa89 

Contato: contato@leonardosousa.dev.br

📜 Licença

Este projeto está sob a licença MIT.
Sinta-se à vontade para usar, modificar e contribuir.