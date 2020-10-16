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
      <div className="bg-white flex flex-col w-full items-center px-4 pb-12">
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
              <h2>Example</h2>
              <p>
                Let's try to do the simple stuff – a light switch. It can be
                switchedOff or switchedOn. On each position, you can SWITCH.
                Let's describe it in a some sort of a structure:
              </p>
              <pre>{str}</pre>
              <h2>Top-down style</h2>
              <p>
                What I like about this approach is that you need to think about
                the app first and then develop it. The same goes when you need
                to make a new feature – the developer has to think how it fits
                in the current machine.
              </p>
              <p>
                You are thinking about the app at very high abstraction level
                without sinking in details. You need to think of states that a
                form can be: loading, submiting, error; as opposed to how
                vertically center the submit button using CSS. This results in
                better arhictecture that leads to great UX.
              </p>
              <h2>Easier refactoring</h2>
              <p>
                I'm able to drastically move stuff around without breaking the
                app. This makes me braver to make a change because I know that
                it will work in the end.
              </p>
              <p>
                This comes from the fact that you have thought about the app
                states and you already have some of the parts working. Having a
                state machine is like a proven theorem: you know it works, just
                need to polish out some of the details to make it work in
                practice.
              </p>
              <h2>Less bugs</h2>
              <p>
                XState removes a class of bugs since a state machine can be only
                in one state and that state can be transitioned by only known
                list of events. This means no more buttons that are disabled and
                loading at the same time.
              </p>
              <h2>Tools</h2>
              <p>
                Good news – the structure I’ve shown you is actually
                standartized which means – great tools! One of the obvious ones
                is <a href="https://xstate.js.org/viz/">visualizing</a> it:
              </p>
              <img src="/xstate-intro/vi.gif" className="w-full" />
              <p>
                But wait, there is more. Since we can visualise the state, the
                next obvious idea is to attach it to your current machine in the
                current UI in the browser and see how the state is changing.
                It's called <a href="https://statecharts.io/">Inspector</a>.
              </p>
              <p>
                The next big idea is to have a UI to construct the state
                machine. Maybe someday we all be changing an app blueprint
                before haphazardly programming a new feature.
              </p>
              <h2>Steep learning curve</h2>
              <p>
                You need to learn a lot of concepts and read a lot of code
                before you can start using XState effectively. And even after
                that it will slow you down at times – kind of just like static
                typing.
              </p>
              <h2>Conclusion</h2>
              <p>
                I will be using XState where the UI is too complex and I need a
                robust solution. I hope I have convinced you to give it a try –
                go read the <a href="https://xstate.js.org/">docs</a>!
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
