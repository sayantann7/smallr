"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Shorten() {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setShortUrl("");
        setUrl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  
  const copyToClipboard = () => {
    if (generated) {
      navigator.clipboard.writeText(generated).then(() => {
        alert('Copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <main className="h-screen w-full overflow-hidden p-10 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <section className="grid grid-cols-2 gap-20">
        <div className="h-[100vh] w-[150vh] p-10 rounded-lg flex flex-col justify-center ">
          <h1 className="text-6xl font-bold font-sans pb-5">
            Shorten your links
          </h1>
          <p className="text-2xl font-sans mt-1.5">
            Enter your link and get a short link
          </p>
        </div>
        <div className="h-[100vh] w-[100vh] pr-0 pl-20 flex justify-center items-center">
          <div className="flex flex-col gap-3">
            <input
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              value={url}
              name="url"
              className="p-2 text-2xl rounded-lg shadow-lg text-black"
              type="text"
              placeholder="Enter your link"
            />
            <input
              onChange={(e) => {
                setShortUrl(e.target.value);
              }}
              value={shorturl}
              className="p-2 text-2xl rounded-lg shadow-lg text-black"
              type="text"
              placeholder="Enter your short link"
            />
            <div className="buttons">
              <button
                onClick={generate}
                className="w-full text-lg bg-blue-700 text-white shadow-lg p-2 rounded-lg"
                type="submit"
              >
                Shorten
              </button>
              {generated && (
                  <button onClick={copyToClipboard} className="w-full mt-3 text-lg bg-blue-700 text-white shadow-lg p-2 rounded-lg">
                    Copy Link
                  </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
