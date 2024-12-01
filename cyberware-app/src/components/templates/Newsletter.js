"use client";

import React from "react";
import NewsletterHero from "../elements/NewsletterHero";
import NewsletterCardComponent from "../elements/NewsletterCardComponent";
import NewsletterSlider from "../elements/NewsletterSlider";
import CoverIndustry from "../CoverIndustry";



export default function Newsletter() {
  return (
    <>
      <NewsletterHero />
      <div className="w-full mx-auto max-w-screen-xl container py-10 flex justify-between ">
        <div className="w-1/3 space-y-10 ">
          <div className="py-2 border-b-2 border-black w-3/4 text-cyberorange text-3xl px-8 mb-14">
            Related News
          </div>
          <div className="pr-20  border-r-4  border-black space-y-10">
            <NewsletterCardComponent
              subtitle="Iranian Hackers Target Critical Infrastructure"
              date="October 20, 2024"
              title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
              body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
            />
            <NewsletterCardComponent
              subtitle="Iranian Hackers Target Critical Infrastructure"
              date="October 20, 2024"
              title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
              body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
            />
            <NewsletterCardComponent
              subtitle="Iranian Hackers Target Critical Infrastructure"
              date="October 20, 2024"
              title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
              body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
            />
            <NewsletterCardComponent
              subtitle="Iranian Hackers Target Critical Infrastructure"
              date="October 20, 2024"
              title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
              body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
            />
          </div>
        </div>
        <div className="w-2/3 px-10">
          <div className="py-2 border-b-2 border-black text-cyberorange text-3xl px-8 mb-14 text-transparent">
            a
          </div>
          <div className="border-b-2 border-black pb-16 text-black space-y-6">
            <h2 className="text-3xl font-semibold">Summary</h2>
            <p className="text-2xl font-normal">
              Phishing attacks have become increasingly sophisticated,
              leveraging social engineering tactics and advanced technology to
              deceive individuals and organizations. This report examines the
              latest trends in phishing, highlights notable case studies, and
              provides actionable prevention strategies to safeguard your
              digital assets.
            </p>
          </div>
          <div className="border-b-4 border-cyberorange pb-16 text-black space-y-16 py-10">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Introduction</h2>
              <p className="text-2xl font-normal">
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">
                Key Trends in Phishing Attacks
              </h2>
              <p className="text-2xl font-normal">
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Notable Case Studies</h2>
              <p className="text-2xl font-normal">
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Prevention Strategies</h2>
              <p className="text-2xl font-normal">
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-bold">Conclusion</h2>
              <p className="font-bold text-3xl">
                Phishing attacks have become increasingly sophisticated,
                leveraging social engineering tactics and advanced technology to
                deceive individuals and organizations. This report examines the
                latest trends in phishing, highlights notable case studies, and
                provides actionable prevention strategies to safeguard your
                digital assets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyberslate">
        <div className="w-full mx-auto max-w-screen-xl container py-10  ">
          <NewsletterSlider />
        </div>
      </div>
      <div className="p2 border-b-4 border-cyberorange">
        <CoverIndustry
          title={
            <span className="text-4xl"><span className="text-cyberorange">Still haven't subscribed to our Newsletter. </span>Sign Up today and stay informed about online security and all the ways you can protect yourself or your business. </span>
          }
          placeholder="Your Email Address"
          buttonText="Join for Free"
        />
      </div>
    </>
  );
}
