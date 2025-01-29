import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import "./globals.css";
import ModalProvider from "@/context/editPayment";
import { CreatePaymentProvider } from "@/context/createPayment";

// const theme = createTheme();

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Payout dashboard CRUD",
  description: "Payout dashboard CRUD",
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
