'use client';

import { CacheProvider } from '@emotion/react';

import { CreatePaymentProvider } from '@/context/createPaymentProvider';
import EditPaymentProvider from '@/context/editPaymentProvider';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../../emotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <EditPaymentProvider>
            <CreatePaymentProvider>
              <CssBaseline />
              {children}
            </CreatePaymentProvider>
          </EditPaymentProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
