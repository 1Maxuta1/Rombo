import '@/styles/globals.scss'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Provider store={store}>
       <SessionProvider><Component {...pageProps} /></SessionProvider>
      </Provider>
    );
  }
  
