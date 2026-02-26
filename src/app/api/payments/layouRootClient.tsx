import RootLayoutClient from '@/app/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payout dashboard CRUD',
  description: 'Payout dashboard CRUD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
