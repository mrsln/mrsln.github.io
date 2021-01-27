import MyHead from "../components/head";
import Link from "next/link";
import Head from "next/head";

import * as XstateIntro from "./posts/xstate-intro/index.mdx";
import * as OfflineVideo from "./posts/offline-video/index.mdx";
import NewsletterForm from "../components/newsletter-form";

const allPostsData = [
  {
    title: XstateIntro.title,
    subtitle: XstateIntro.description,
    id: "xstate-intro",
  },
  {
    title: OfflineVideo.title,
    subtitle: OfflineVideo.description,
    id: "offline-video",
  },
];

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Marsel Atniashev</title>
      </Head>
      <div className="flex flex-grow flex-col">
        <div className="flex bg-gradient-to-r from-pink-50 via-transparent to-indigo-50">
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
        <div className="bg-gray-50 flex flex-col items-center flex-grow">
          <div className="w-full flex justify-center mx-auto">
            <div className="w-full max-w-screen-lg lg:w-3/4 space-y-10 pb-10">
              {/* blog */}
              <div className="w-full space-y-8 bg-white border lg:rounded-lg sm:-mt-8 p-10 sm:mb-4 py-12">
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
              {/* newsletter */}
              <div className="relative lg:rounded-lg px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                  >
                    <path
                      className="text-indigo-500 text-opacity-40"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                      className="text-indigo-700 text-opacity-40"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <div className="sm:text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                      Subscribe to my newsletter.
                    </h2>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                      Not sure what this is going to be. I guess I occasionally
                      will send you the awesome stuff I have done.
                    </p>
                  </div>
                  <NewsletterForm />
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
