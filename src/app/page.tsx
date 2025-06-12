import { Heading } from "./components/heading";
import { MaxWidthWrapper } from "./components/max-width-wrapper";
import React from "react";

const Page = () => {
  return <>
    <section className="relative py-24 sm:py-32 bg-brand-25">
      <MaxWidthWrapper className="text-center">
        <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
            <Heading><span>Real-Time Sass Insights,</span></Heading>
            <br />
            <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Delivered to Your Discord</span>
          </div>

          <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">NotiPanda is the easiest way to monitor your SaaS. Get instant notifications for {" "}
            <span className="font-semibold text-gray-700">sales, new users, or any other event </span>
            sent directly to your Discord server.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
    <section></section>
  </>
}

export default Page