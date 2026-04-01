import AuthPage from '@/components/auth/AuthPage/AuthPage';

export const metadata = {
  title: 'Регистрация — Saqalia',
  description: 'Создайте бесплатный аккаунт Saqalia и начните экономить 20+ часов в неделю',
};

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}
