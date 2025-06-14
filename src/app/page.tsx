import { Heading } from "./components/heading";
import { MaxWidthWrapper } from "./components/max-width-wrapper";
import { Check } from "lucide-react";
import React from "react";
import { ShinyButton } from "./components/shiny-button";

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
            <span className="font-semibold text-gray-700">sales, new users, or any other event</span>{" "}
            sent directly to your Discord server.
          </p>

          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col sm:items-start">
            {["Real-time Discord alerts for cirtical events",
              "Customizable notifications for sales, new users, and more", "Easy integration with your existing SaaS",].map((item, index) => ( 
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700"/>
                  {item}
                </li>
              ))}
          </ul>

          <div className="w-full max-w-80">
            <ShinyButton 
              href="/sign-up"
              className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">Start For Free Today
            </ShinyButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
    <section></section>
  </>
}

export default Page