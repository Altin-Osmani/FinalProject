"use client";
import React from "react";
import EXPERTISE from "../../icons/AboutUsIcons/expertise.svg";
import MISSION from "../../icons/AboutUsIcons/mission.svg";
import STORY from "../../icons/AboutUsIcons/story.svg";
import VALUES from "../../icons/AboutUsIcons/values.svg";
import AboutUsHero from "../elements/AboutUsHero";
import AboutUsCardComponent1 from "../elements/AboutUsCardComponent1";
import PINDROP from "../../icons/AboutUsIcons/pin-drop.svg";
import LeaderShipTeam from "../LeaderShipTeam";
import CertCardComponent from "@/components/elements/CertCardComponent";
import ISO from "../../icons/AboutUsIcons/path7.svg";
import DiscoverWhySlider from "../elements/DiscoverWhySlider";

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHero />

      {/* Cards */}
      <div className="bg-white ">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col justify-between items-center space-y-24 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-stretch gap-6 md:gap-12 w-full -mt-20 pb-20">
            <AboutUsCardComponent1
              Icon={MISSION}
              title={
                <>
                  <span className="text-cyberorange">Our </span> Mission
                  Statement
                </>
              }
              body="At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering cutting-edge cybersecurity solutions. By combining advanced AI technologies with industry-leading expertise, we ensure that our clients are protected from the evolving landscape of cyber threats. Our goal is to keep your business secure and resilient."
            />
            <AboutUsCardComponent1
              Icon={STORY}
              title={
                <>
                  <span className="text-cyberorange">Our </span> Story
                </>
              }
              body="At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering cutting-edge cybersecurity solutions. By combining advanced AI technologies with industry-leading expertise, we ensure that our clients are protected from the evolving landscape of cyber threats. Our goal is to keep your business secure and resilient."
            />
            <AboutUsCardComponent1
              Icon={EXPERTISE}
              title={
                <>
                  <span className="text-cyberorange">Our </span> Expertise
                </>
              }
              body="At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering cutting-edge cybersecurity solutions. By combining advanced AI technologies with industry-leading expertise, we ensure that our clients are protected from the evolving landscape of cyber threats. Our goal is to keep your business secure and resilient."
            />
            <AboutUsCardComponent1
              Icon={VALUES}
              title={
                <>
                  <span className="text-cyberorange">Our </span> Values
                </>
              }
              body="At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering cutting-edge cybersecurity solutions. By combining advanced AI technologies with industry-leading expertise, we ensure that our clients are protected from the evolving landscape of cyber threats. Our goal is to keep your business secure and resilient."
            />
          </div>
        </div>
      </div>

      {/* Our Locations */}
      <div className="bg-cover bg-[url('/AboutUsImages/our-locations.jpg')]">
        <div className="container mx-auto max-w-screen-xl w-full">
          <h2 className="text-8xl font-bold pt-32 pb-20 text-white">
            Our
            <span className="text-cyberorange"> Locations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 text-white space-x-6 pb-32">
            {/* Location 1 */}
            <div className="border-b-2 border-cyberorange">
              <h3 className="text-3xl font-bold">Germany</h3>
              <div className="text-xl py-4">
                <PINDROP />
              </div>
              <p className="text-l pb-4">
                Hohenzollernring No. 72
                <br />
                Köln
                <br />
                50672
              </p>
            </div>
            {/* Location 2 */}
            <div className="border-b-2 border-cyberorange">
              <h3 className="text-3xl font-bold">North Macedonia</h3>
              <div className="text-xl py-4">
                <PINDROP />
              </div>
              <p className="text-l pb-4">
                11th October No. 25
                <br />
                Skopje
                <br />
                1000
              </p>
            </div>
            {/* Location 3 */}
            <div className="border-b-2 border-cyberorange">
              <h3 className="text-3xl font-bold">Albania</h3>
              <div className="text-xl py-4">
                <PINDROP />
              </div>
              <p className="text-l pb-4">
                Rruga Myslym Shyri No. 37
                <br />
                Tirana
                <br />
                1001
              </p>
            </div>
            {/* Location 4 */}
            <div className="border-b-2 border-cyberorange">
              <h3 className="text-3xl font-bold">Turkey</h3>
              <div className="text-xl py-4">
                <PINDROP />
              </div>
              <p className="text-l pb-4">
                Istiklal Caddesi No. 45
                <br />
                Istanbul
                <br />
                34430
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Founders */}
      <div className="bg-white ">
        <div className="w-full max-w-screen-xl container mx-auto flex flex-col justify-between items-center p-10">
          <h1 className="text-cyberorange text-5xl font-bold pb-8">
            Our Founders
          </h1>
          <p className="text-black">
            Here’s a glimpse into the expertise driving CGD’s security
            solutions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-x-12 md:gap-x-20 pb-20">
            <LeaderShipTeam
              image="/furkan.jpeg"
              title="Furkan Bajrami"
              body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras at nunc."
            />

            <LeaderShipTeam
              image="/petar.png"
              title="Petar Ninovski"
              position="Co-Founder & CXX"
              body="Petar has over 10 years of experience in cybersecurity and IT consulting."
            />
          </div>
        </div>
      </div>

      {/* Cybersecurity Specialists */}
      <div className="bg-cybergray ">
        <div className="w-full max-w-screen-xl container mx-auto flex flex-col justify-between items-center p-10">
          <h1 className="text-cyberorange text-5xl font-bold">
            Cybersecurity Specialists
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-6 md:gap-12 lg:gap-24   pb-20">
            <LeaderShipTeam
              image="/lukas.jpg"
              title="Lukas Schmidt"
              body="Lukas excels in threat detection and network security, identifying vulnerabilities to protect systems from cyber risks."
            />

            <LeaderShipTeam
              image="/emma.jpg"
              title="Emma Brown"
              body="Emma designs training programs to boost employee cybersecurity awareness and help organizations stay secure."
            />

            <LeaderShipTeam
              image="/karl.jpg"
              title="Karl Müller"
              body="Karl specializes in penetration testing and incident response, helping businesses safeguard against evolving threats."
            />
          </div>
          <div className="w-full pt-5 flex items-center justify-end text-right text-2xl text-cyberorange text-bold">
            <p className="border-b-2 border-cyberorange px-10 ">
              Meet the Rest of the Team
            </p>
          </div>
        </div>
      </div>

      {/* Security Awareness Advisors */}
      <div className="bg-white ">
        <div className="w-full max-w-screen-xl container mx-auto flex flex-col justify-between items-center p-10">
          <h1 className="text-cyberorange text-5xl font-bold">
            Security Awareness Advisors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-6 md:gap-12 lg:gap-24   pb-20">
            <LeaderShipTeam
              image="/emily.jpg"
              title="Emily Johnson"
              body="Emily simplifies cybersecurity for employees through workshops, teaching best practices for staying safe online."
            />

            <LeaderShipTeam
              image="/hannah.jpg"
              title="Hannah Weber"
              body="Hannah creates engaging security campaigns, making cybersecurity easy to understand and apply across teams."
            />

            <LeaderShipTeam
              image="/james.jpg"
              title="James Fischer"
              body="James focuses on incident monitoring and response, using data analytics to keep systems secure from potential attacks."
            />
          </div>
          <div className="w-full pt-5 flex items-center justify-end text-right text-2xl text-cyberorange text-bold">
            <p className="border-b-2 border-cyberorange px-10 ">
              Meet the Rest of the Team
            </p>
          </div>
        </div>
      </div>

      {/* Our certifications */}
      <div className="bg-cybergray ">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col justify-between items-center space-y-16 px-10 py-10 md:py-20">
          <h2 className="text-white text-5xl font-bold">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-16 w-full">
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
            <CertCardComponent
              Icon={ISO}
              title="Quality Management (DIN EN ISO 9001)"
              body="ensures consistent quality in our processes, enhancing customer satisfaction."
            />
          </div>
        </div>
      </div>

      {/* Discover why our clients */}
      <div className="w-full bg-white px-10 py-10 md:py-20">
        <DiscoverWhySlider></DiscoverWhySlider>
      </div>
    </>
  );
}
