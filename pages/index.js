import MyHead from "../components/head";
import Link from "next/link";
import Head from "next/head";

import * as XstateIntro from "./posts/xstate-intro";

const allPostsData = [
  {
    title: XstateIntro.title,
    subtitle: XstateIntro.subtitle,
    id: "xstate-intro",
  },
];

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Marsel Atniashev</title>
      </Head>
      <div className="flex flex-grow flex-col">
        <div className="flex bg-gradient-to-r from-pink-100 via-transparent to-indigo-100">
          <div className="flex flex-col justify-center items-center sm:flex-row w-full px-4 py-12">
            <div className="w-32 sm:w-64">
              <MyHead />
            </div>
            <div className="px-4">
              <h1
                style={{ fontFamily: "'Caveat', cursive;" }}
                className="text-2xl font-bold leading-7 sm:text-5xl sm:leading-relaxed sm:truncate bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-900"
              >
                Hello
              </h1>
              <h2 className="text-xl text-indigo-700 font-medium tracking-wide">
                <div>I'm Marsel Atniashev.</div>
                <div>I build stuff on the web.</div>
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center flex-grow">
          <div className="space-y-8 bg-white border sm:rounded-lg w-full sm:mx-8 md:mx-20 lg:mx-0 lg:w-2/3 max-w-screen-lg sm:-mt-8 p-10 sm:mb-4 py-12">
            <h3 className="text-3xl leading-9 font-medium text-gray-800">
              Blog
            </h3>
            <ul className="space-y-4">
              {allPostsData.map(({ id, title, subtitle }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="text-indigo-500 font-semibold leading-relaxed tracking-wider uppercase">
                        {title}
                      </div>
                      <div>{subtitle}</div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
