import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';

export default function Login() {
  return (
    <Layout title="Entrar - Tá Caro!">
      <AuthForm mode="login" />
    </Layout>
  );
}
