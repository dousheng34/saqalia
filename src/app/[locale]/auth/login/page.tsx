import AuthPage from '@/components/auth/AuthPage/AuthPage';

export const metadata = {
  title: 'Войти — Saqalia',
  description: 'Войдите в свой аккаунт Saqalia и получите доступ ко всем AI инструментам',
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
