import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ThemePicker, { theme } from "../components/ThemePicker";
import App from "../public/templates/Project";

export default function Editor() {
  const [currentTheme, setCurrentTheme] = useState<theme>("light");
  const [title, setTitle] = useState<string>("My Awesome Website");
  const [description, setDescription] = useState<string>("");
  return (
    <>
      <Head>
        <title>Orchid | Editor</title>
        <meta
          name="description"
          content="A template generator that plays nice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="drawer drawer-mobile" data-theme="night">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="mockup-window border border-base-content bg-base-300 m-8">
            <div data-theme={currentTheme}>
              <App config={{ title, theme: currentTheme, description }} />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            <input
              type="text"
              placeholder="My Awesome Website"
              className="input input-bordered input-secondary w-full max-w-xs mb-4"
              onChange={(e) => setTitle(e.target.value)}
            />
            <ThemePicker
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="divider"></div>
            <li className="bg-primary rounded-btn text-primary-content">
              <a className="w-full place-content-center">Download</a>
            </li>
            <div className="divider font-mono">ADVANCED</div>
            <div className="mockup-code w-72">
              <pre>
                <code>{"{"}</code>
              </pre>
              <pre>
                <code>{`  "title": "${title}",`}</code>
              </pre>
              <pre>
                <code>{`  "description": "${description}",`}</code>
              </pre>
              <pre>
                <code>{`  "theme": "${currentTheme}"`}</code>
              </pre>
              <pre>
                <code>{"}"}</code>
              </pre>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
