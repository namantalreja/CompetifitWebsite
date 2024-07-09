"use client";
import Image from "next/image";
import Head from "next/head";
import NewsletterSubscribe from "./newslettersubscribe";
import { InstagramEmbed } from "react-social-media-embed";
import crown from "../assets/crown.png";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col justify-center items-center"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>COMPETIFIT</title>
      </Head>

      <div className="flex flex-col sm:flex-row sm:space-x-10 m:space-x-80">
        <div className="flex flex-col items-center sm:justify-center text-center items-center">
          <Image src={crown} className="w-1/4"></Image>
          <h1 className="text-2xl m:text-6xl font-bold text-white items-center text-center pt-5 text-wrap overflow-hidden">
            COMPETIFIT
          </h1>
          <p className=" text-gray-400 text-center">
            A Competitive Fitness App.
          </p>
          <NewsletterSubscribe />
        </div>
        <div className="flex justify-center items-center w-full px-0.5">
          <InstagramEmbed
            url="https://www.instagram.com/p/C87RMkqt0Kz/"
            width={328}
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </main>
  );
}
