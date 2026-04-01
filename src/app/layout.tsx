import type { Metadata } from 'next';

export const metadata: Metadata = {
            title: 'Saqalia - AI Platform for Teachers',
            description: 'AI Platform for Teachers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
            return children;
}
