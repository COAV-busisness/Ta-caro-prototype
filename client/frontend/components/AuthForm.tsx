"use client";
import Link from "next/link";
// https://nextjs.org/docs/14/app/building-your-application/routing/linking-and-navigating
import { useRouter } from "next/navigation";
import React from "react";
//https://nextjs.org/docs/messages/css-global
import authFormStyles from "../styles/authForm/authForm.module.scss";

type Props = {
  mode: "login" | "register";
  onSubmit?: (data: any) => void;
};

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const signinOrSignup = () => {
    mode === "login" ? router.push("/dashboard") : router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto card-base">
      <h2 className="text-center text-2xl mb-4 text-[color:var(--tacaro-red)]">
        {mode === "login" ? "Tá Caro!" : "Tá Caro!"}
      </h2>
      <form>
        {mode === "register" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Nome</label>
            <input className="w-full p-3 border rounded" />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-medium">E-mail</label>
          <input type="email" className="w-full p-3 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Senha</label>
          <input type="password" className="w-full p-3 border rounded" />
        </div>
        {mode === "register" && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Confirmar Senha</label>
            <input type="password" className="w-full p-3 border rounded" />
          </div>
        )}
        <button
          onClick={signinOrSignup}
          className="w-full bg-[color:var(--tacaro-yellow)] text-[color:var(--tacaro-red)] rounded-full py-3 font-bold"
        >
          {mode === "login" ? "Entrar" : "Criar Conta"}
        </button>
      </form>

      <div className="divider my-4 text-center relative">
        <span className="bg-white px-4">ou</span>
      </div>

      <button
        onClick={signinOrSignup}
        className="w-full border p-3 rounded flex items-center justify-center gap-2"
      >
        <i className="fab fa-google"></i>{" "}
        {mode === "login" ? "Entrar com Google" : "Criar conta com Google"}
      </button>

      <div className="text-center mt-4">
        {mode === "login" ? (
          <div className={authFormStyles["login-register"]}>
            <p>Nao tem uma conta?</p>
            <Link href="/register" className={authFormStyles["link"]}>
              Acesse aqui
            </Link>
          </div>
        ) : (
          <div className={authFormStyles["login-register"]}>
            <p>Já possui uma conta? </p>
            <Link href="/login" className={authFormStyles["link"]}>
              Entre aqui
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
