import type { Metadata } from 'next';

export const metadata: Metadata = {
      title: 'Saqalia',
      description: 'Saqalia Application',
};

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
              <html lang="en">
                    <body>
                        {children}
                    </body>body>
              </html>html>
            );
}
