import './globals.scss';
import type { Metadata } from 'next';
import Mont from 'next/font/local';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import PrivateRoute from '@/shared/authBlock/privateRouter';
const MontFont = Mont({ src: '../../public/fonts/Mont-SemiBold.woff' });

export const metadata: Metadata = {
  title: 'Inverse Тур',
  description: 'Расписания всех мероприятий Смоленска на 2023 год и удобная покупка билетов',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={MontFont.className}>
        <PrivateRoute>
          <Theme>{children}</Theme>
        </PrivateRoute>
      </body>
    </html>
  );
}
