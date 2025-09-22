import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';

export default function Register() {
  return (
    <Layout title="Criar Conta - Tá Caro!">
      <AuthForm mode="register" />
    </Layout>
  );
}
