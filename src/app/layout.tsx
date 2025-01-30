import { CreatePaymentProvider } from '@/context/createPaymentProvider';
import ModalProvider from '@/context/editPaymentProvider';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Payout dashboard CRUD',
  description: 'Payout dashboard CRUD',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <CreatePaymentProvider>
            <CssBaseline />
            {children}
          </CreatePaymentProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
