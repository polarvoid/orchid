import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ThemePicker, { theme } from "../components/ThemePicker";
import LayoutPicker, { layout } from "../components/LayoutPicker";
import Project from "../public/templates/Project";
import Band from "../public/templates/Band";
import Hackathon from "../public/templates/Hackathon";


type config = {
  title: string;
  description: string;
  theme: theme;
};

export default function Editor() {
  const [currentTheme, setCurrentTheme] = useState<theme>("light");
  const [currentLayout, setCurrentLayout] = useState<layout>("layout-1");
  const [title, setTitle] = useState<string>("My Awesome Website");
  const [description, setDescription] = useState<string>("");
  // console.log(currentLayout)

  // funtion to render app based on layout
  const renderApp = () => {
    switch (currentLayout) {
      case "layout-1":
        return <Project config={{ title, theme: currentTheme, description }} />;
      case "layout-2":
        return <Band config={{ title, theme: currentTheme, description }} />;
      case "layout-3":
        return <Hackathon config={{ title, theme: currentTheme, description }} />;
      default:
        return <Project config={{ title, theme: currentTheme, description }} />;
    }
  };

  // function to download the zip file
  const downloadZip = () => {
    console.log("Download Zip");
    let jsonDict = {
      title: title,
      description: description,
      theme: currentTheme,
      layout: currentLayout
    }
    
    let url = "https://github.com/polarvoid/vitamin/archive/main.zip";

    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', 'vitamin.zip');
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });

    
  
    // download the zip data from url
    

    // Write data to a json file


  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="mockup-window border bg-base-300 m-8">
            <div data-theme={currentTheme}>
              {/* <App config={{ title, theme: currentTheme, description }} /> */}
              {renderApp()}
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
            <textarea
              className="textarea mb-4"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <ThemePicker
              currentTheme={currentTheme}
              setCurrentTheme={setCurrentTheme}
            />

            <LayoutPicker
              currentLayout={currentLayout}
              setCurrentLayout={setCurrentLayout}
            />
            
            {/* <li>
              <a>Sidebar Item 2</a>
            </li> */}
            <div className="divider"></div>
            <li className="bg-primary rounded-btn text-primary-content">
              <a className="w-full place-content-center" onClick={downloadZip}>Download</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
