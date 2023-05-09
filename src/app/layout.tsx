import { Nunito } from 'next/font/google';
import './globals.css';
import { Header } from '@/layout';
import { ClientOnly, ToastrProvider } from '@/providers';
import { LoginModal, RegisterModal } from '@/ui';
import getCurrentUser from '@/utils/helpers/getCurrentUser';

export const metadata = {
  title: 'Airbnb | Home',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToastrProvider />
          <Header currentUser={currentUser} />
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
