"use client"
import Image from "next/image";
import Head from "next/head";
import NewsletterSubscribe from "./newslettersubscribe";
import { InstagramEmbed } from "react-social-media-embed";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-black">
      <Head>
        <title>Competifit</title>
      </Head>
  
      {/* <nav className="bg-black shadow-lg w-full fixed top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-white">
                  <span className="font-bold">Competifit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="flex flex-row justify-center items-center h-screen">
      <div style={{ display: 'flex', justifyContent: 'center', paddingRight: '30%'}}>
          <InstagramEmbed url="https://www.instagram.com/p/C87RMkqt0Kz/" width={328} />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Competifit</h1>
          <p className="mt-2 text-gray-400">
            A Competitive Fitness App.
          </p>
          <NewsletterSubscribe />
        </div>
      </div>
      </div>
    </main>
  );
}  
