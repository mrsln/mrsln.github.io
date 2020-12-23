import "../styles/index.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex">
        <Component {...pageProps} />
      </div>
    </AnimateSharedLayout>
  );
}

export default MyApp;
