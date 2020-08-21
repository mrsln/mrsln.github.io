import React from "react";
import Head from "next/head";
import Link from "next/link";
import MyHead from "../../components/head";
import Hero from "./hero.svg";

const str = `{
  "states": {
    "switchedOff": {
      "on": {
        "SWITCH": "switchedOn"
      }
    },
    "switchedOn": {
      "on": {
        "SWITCH": "switchedOff"
      }
    }
  },
 
  "initial": "switchedOff"
  "id": "light",
 }
`;

export default function XstateIntro() {
  return (
    <>
      <Head>
        <title>{title} – Marsel Atniashev</title>
      </Head>
      <div className="bg-white flex flex-col w-full items-center px-4">
        <div>
          <div className="flex py-6 space-x-2">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="w-8">
                  <MyHead />
                </div>
                <div className="text-teal-700">Marsel Atniashev</div>
              </a>
            </Link>
          </div>
          <div className="prose">
            <h1 className="font-semibold leading-relaxed tracking-wider uppercase">
              <div className="text-indigo-500">{title}</div>
            </h1>
            <p>
              After reading this article you will learn one of the ways to make
              programming a little bit more sane using XState.
            </p>
            <Hero />
            <p>
              My typical 11 years developer spiral growth:
              <ul>
                <li>get to the point as fast as I can</li>
                <li>wait, can it be more maintainable?</li>
                <li>make everything `clean`</li>
                <li>wait can we develop faster</li>
                <li>get to to the point faster and cleanerish.</li>
              </ul>
              <p>
                XState offers a faster prototyping and in case of fire a
                developer has an opportunity to throw everything away except for
                the core business logic. Isn’t it the dream?
              </p>
              <p>
                Ok, let's try to do the simple stuff – a light switch. It can be
                switchedOff or switchedOn. On each position, you can SWITCH.
                Let's describe it in a some sort of a structure:
              </p>
              <pre>{str}</pre>
              <p>
                In the app code I'd imagine having a variable named
                `currentSwitchPosition` ("switchedOff" or "switchedOn") and a
                code to switch the position: `switchService.send('SWITCH')`.
              </p>
              <p>
                What I like about this approach is that you need to think about
                the app first and then develop it. The same goes when you need
                make a new feature – the developer has to think how it fits in
                the current machine. I'm able to drastically move stuff around
                without breaking the app. This makes me braver to make a change
                because I know that’ll work in the end.
              </p>
              <p>
                Good news – the structure I’ve showed you is actually
                standartized which means – great tools! One of the obvious ones
                is visualizing it:
              </p>
              <img src="/vi.gif" className="w-full" />
              <p>
                I hope I have convinced you to give it a try – go read the{" "}
                <a href="https://xstate.js.org/">docs</a>!
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const title = "Simplifying complicated";
export const subtitle =
  "Intro into XState and how it can help with complexity of your app.";
