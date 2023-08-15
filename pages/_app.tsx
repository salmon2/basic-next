// import '@styles/globals.css'
import AppLayoutWithoutSideNav from '@components/layout/app-layout/AppLayoutWithoutSideNav';
import '@styles/reset.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayoutWithoutSideNav>
      <Component {...pageProps} />
    </AppLayoutWithoutSideNav>
  );
}
