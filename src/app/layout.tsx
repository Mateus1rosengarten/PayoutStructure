import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import "./globals.css";

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
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
