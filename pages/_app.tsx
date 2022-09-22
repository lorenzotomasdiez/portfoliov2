import "simplebar/src/simplebar.css";
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import {ReactElement, ReactNode} from 'react';
import ThemeProvider from '../theme';
import {SettingsProvider, SettingsValueProps} from '../context';
import {MotionLazyContainer} from '../components';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}
function MyApp({ Component, pageProps, settings }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider defaultSettings={settings}>
        <MotionLazyContainer>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </MotionLazyContainer>  
      </SettingsProvider>
    </>
  )
}

export default MyApp
