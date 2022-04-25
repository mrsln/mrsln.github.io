import Head from "next/head";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import Code from "../code";
import MyHead from "../head";

const components = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
  pre: (props) => <div {...props} />,
  code: Code,
  p: (props) => <div {...props} />,
};

export default function Layout({ children, meta }: Props) {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <div className="bg-white flex flex-col w-full items-center pb-12">
        <div>
          <div className="flex py-6 space-x-2">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="w-8">
                  <MyHead />
                </div>
                <div className="text-indigo-500">Marsel Atniashev</div>
              </a>
            </Link>
          </div>

          <div className="prose">
            <h1 className="font-semibold leading-relaxed tracking-wider uppercase">
              <div className="text-indigo-500">{meta.title}</div>
            </h1>
            {children}
          </div>
        </div>
      </div>
    </MDXProvider>
  );
}

interface Props {
  children: React.ReactChild;
  meta: {
    title: string;
    description: string;
  };
}
