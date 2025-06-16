import { Heading } from "../../components/heading";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";
import { Check } from "lucide-react";
import React from "react";
import { ShinyButton } from "../../components/shiny-button";
import { MockDiscordUI } from "@/components/mock-discord-ui";
import { AnimatedList } from "@/components/magicui/animated-list";
import { DiscordMessage } from "@/components/discord-message";

const Page = () => {
  return (<>
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-brand-25 to-brand-50">
      <MaxWidthWrapper className="text-center">
        <div className="relative mx-auto flex flex-col items-center gap-12">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-normal text-gray-900">
              <span>Real-Time Sass Insights,</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-600 to-brand-800 text-transparent bg-clip-text">
                Delivered to Your Discord
              </span>
            </h1>
          </div>

          <p className="text-lg/7 text-gray-600 max-w-2xl text-center text-pretty">
            NotiPanda is the easiest way to monitor your SaaS. Get instant notifications for{" "}
            <span className="font-semibold text-gray-800">sales, new users, or any other event</span>{" "}
            sent directly to your Discord server.
          </p>

          <ul className="space-y-3 text-base/7 text-gray-600 text-left flex flex-col sm:items-start">
            {["Real-time Discord alerts for critical events",
              "Customizable notifications for sales, new users, and more", 
              "Easy integration with your existing SaaS"].map((item, index) => ( 
                <li key={index} className="flex gap-3 items-center text-left bg-white/50 px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <Check className="size-5 shrink-0 text-brand-600"/>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
          </ul>

          <div className="w-full max-w-xs">
            <ShinyButton 
              href="/sign-up"
              className="relative z-10 h-14 w-full text-base shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Start For Free Today
            </ShinyButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
    
    <section className="relative bg-gradient-to-b from-brand-50 to-white pb-24">
      <div className="absolute inset-x-0 top-0 h-80 bg-brand-600 rounded-b-[3rem]"/>
      <div className="relative mx-auto pt-16">
        <MaxWidthWrapper className="relative">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-inset ring-gray-900/10 shadow-2xl lg:p-6">
            <MockDiscordUI>
              <AnimatedList delay={800}>
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 12:35PM"
                  badgeText="SignUp"
                  badgeColor="#43b581"
                  title="👤 New user signed up"
                  content={{
                    name: "Mateo Ortiz",
                    email: "m.ortiz19@gmail.com",
                  }}
                />
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 12:35PM"
                  badgeText="Revenue"
                  badgeColor="#faa61a"
                  title="💰 Payment received"
                  content={{
                    amount: "$49.00",
                    email: "zoe.martinez2001@email.com",
                    plan: "PRO",
                  }}
                />
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 5:11AM"
                  badgeText="Milestone"
                  badgeColor="#5865f2"
                  title="🚀 Revenue Milestone Achieved"
                  content={{
                    recurringRevenue: "$5,000 USD",
                    growth: "+8.2%",
                  }}
                />
              </AnimatedList>
            </MockDiscordUI>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>

    <section className="py-24 bg-white">
      {/* Additional content sections can go here */}
    </section>
  </>)
}

export default Page