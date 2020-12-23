import React from "react";
import Head from "next/head";
import Link from "next/link";
import Prism from "prismjs";
import MyHead from "../../../components/head";

export const title = "Offline Videos";
export const subtitle = "Play media even with poor internet connection.";

const code1 = `import { set, Store } from "idb-keyval";

async function storeFileList(URLs) {
  const db = new Store("my-files");
  await new Promise.all(
    URLs.map((url) => set(url, url, db))
  );
}`;

const code2 = `function cacheFile(url) {
  const cache = await caches.open("my-files");
  const response = await fetch(url);
  await cache.put(url, response);
}`;

const code3 = `self.addEventListener("fetch", (event) =>
  event.respondWith(getResponse(event))
);

async function getResponse(event) {
  const response = await caches.match(event.request);
  if (response) return response;

  const onlineResponse = fetch(event.request);
  return onlineResponse;
}`;

const code4 = `const isPersisted = await navigator.storage.persisted();
console.log(\`Persisted storage granted: \${isPersisted}\`);`;

const code5 = `async function reCheckCache() {
  const db = new Store("my-files");
  const files = (await keys(db)).map((key) => key.toString());
  const cachedFiles = (await cache.keys()).map((key) => key.url);
  await Promise.all(
    files.map(async (file) => {
      if (!cachedFiles.file.includes(file)) {
        cacheFile(file);
      }
    })
  );
}`;

const code6 = `function play(videoEl) {
  try {
    videoEl.play();
  } catch (e) {
    videoEl.muted = true;
    videoEl.play();
  }
}`;

const registerSWCode = `navigator.serviceWorker.register("service-worker.js")`;

export default function OfflineVideo() {
  return (
    <>
      <Head>
        <title>{title} – Marsel Atniashev</title>
      </Head>
      <div className="bg-white flex flex-col w-full items-center px-4 pb-12">
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
              <div className="text-indigo-500">{title}</div>
            </h1>
            <p>
              At{" "}
              <a href="https://www.fugo.ai" target="_blank">
                Fugo
              </a>
              , we needed to make sure of uninterrupted playback. In this
              article you will learn how to do that utilizing Service Worker,
              Cache API, as well as a couple of gotchas about evicting policies
              and video with audio.
            </p>
            <h2>Progressive Web Apps</h2>
            <p>
              We support a wide range of devices so we needed a way to create a
              cross-platform player that can be implemented and supported by a
              small team. Also, Digital Signage players often have a poor
              internet connection or no connection at all. PWA is a perfect fit
              for the task. Basically, PWA is an approach to web development
              that results in a web app that has user experience of a native
              application. This means, that the app can be installed on Home
              screen and used even in case of absent of the internet.
            </p>
            <h2>Indexed Database API</h2>
            <p>
              A big part of any complex Web App is persistent state storage.
              IndexedDB is the best candidate for this: it’s performant and
              doesn’t block the main thread. Its API might be a bit too
              elaborate and that’s why we have chosen `idb-keyval` – a wrapper
              library with simple interfaces for writing and reading from the
              DB. One of the states in our case could be a list of the video
              files:
              <JS>{code1}</JS>
              It looks a bit weird to store a list in a key-val fashion but I
              think it gives us simplicity.
            </p>
            <h2>Cache API + Service Worker</h2>
            <p>
              In order to ensure offline playback and uninterrupted video
              without buffering over poor internet connection, we need to store
              files in Cache and intercept the network request using Service
              Worker. First, we need to write a file to the Cache:
              <JS>{code2}</JS>
              Second, we need to intercept a network request and serve it from
              the Cache:
              <JS>{code3}</JS>
              <div className="text-center -mt-4 mb-4 font-extralight">
                service-worker.js
              </div>
              Finally, the Service Worker needs to be registered:
              <JS>{registerSWCode}</JS>
            </p>
            <h2>Gotcha number one: cache eviction polices</h2>{" "}
            <p>
              Files in the Cache can be removed by the browser if the OS needs
              more space on the disk. Even though, modern Chrome gives 60% of
              free space to a website, older browsers can have their own rules
              for eviction. That’s why we need to make sure that the file we
              need to play soon is in the cache. First, try to tell the browser
              to persist the data. It most likely will not obey, but it doesn’t
              hurt to ask:
              <JS>{code4}</JS>
              Here is a simple code for checking and re-downloading missing
              files:
              <JS>{code5}</JS>
            </p>
            <h2>Gotcha number two: videos with audio track</h2>
            <p>
              Website with autoplaying videos have ruined it for all of us. To
              combat that, Google decided to forbid playing videos with sound
              without the user’s input. Our app needs to survive an atomic
              explosion so this should be handled with ease. Here is a code that
              will allow you to play the video no matter what
              <JS>{code6}</JS>
            </p>
            <h2>Conclusion</h2>
            <p>
              Service Worker and Cache API are quite old technologies that have
              been available since 2015 in Chrome. It means that it’s safe to
              use them and it’s perfect if you need to keep playing the music
              when the internet speed is close to zero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function JS({ children }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="mb-4">
      <pre>
        <code className="language-js">{children}</code>
      </pre>
    </div>
  );
}
