import { AppProps } from 'next/app';

import BaseLayout from '@/layout/BaseLayout';

import GlobalStyle from '../styles/GlobalStyle';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
      <GlobalStyle />
    </>
  );
}
