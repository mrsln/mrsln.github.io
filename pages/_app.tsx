import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import "prismjs/themes/prism-tomorrow.css";

import "../styles/index.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimateSharedLayout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="min-h-screen flex">
          <Component {...pageProps} />
        </div>
      </AnimateSharedLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
