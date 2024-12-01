"use client";

import HomeCardComponent from "@/components/elements/HomeCardComponent";
import HeroComponent from "../elements/HeroComponent";

import React from "react";
import Icon1 from "../../icons/ServiceIcons/path11.svg";
import Icon2 from "../../icons/ServiceIcons/g21.svg";
import Icon3 from "../../icons/ServiceIcons/path9.svg";
import Icon4 from "../../icons/ServiceIcons/path17.svg";
import Icon5 from "../../icons/ServiceIcons/path13.svg";
import Icon6 from "../../icons/ServiceIcons/path7.svg";
import QuotesCardComponent from "../elements/QuotesCardComponent";
import SliderComponent from "../elements/SliderComponent";
import LeaderShipTeam from "../LeaderShipTeam";
import HomeIndustries from "../elements/HomeIndustries";
import HomePartners from "../elements/HomePartners";

export default function HomePage() {
  return (
    <>
      <HeroComponent />
      <div className="bg-cybergray ">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col justify-between items-center space-y-24 px-10 py-10 md:py-20">
          <h2 className="text-cyberorange text-5xl font-bold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-6 md:gap-12 lg:gap-24 w-full">
            <HomeCardComponent
              Icon={Icon1}
              title="SIEM Threat Detection & Response"
              body="Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business"
            />
            <HomeCardComponent
              Icon={Icon2}
              title="Penetration Testing "
              body="Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services"
            />
            <HomeCardComponent
              Icon={Icon3}
              title="Incident Response"
              body="In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly"
            />
            <HomeCardComponent
              Icon={Icon4}
              title="Network Security"
              body="We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access"
            />
            <HomeCardComponent
              Icon={Icon5}
              title="Security Awareness Training"
              body="Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks"
            />
            <HomeCardComponent
              Icon={Icon6}
              title="Vulnerability Managment"
              body="Identify, assess, and fix system weaknesses to reduce security risks and enhance resilience."
            />
          </div>
        </div>
      </div>
      {/*  Who We Are  */}
      <div className=" w-full border-t-4 border-cyberorange  bg-cybergray px-10 py-10 md:py-20">
        <div className="container mx-auto flex flex-col space-y-10 justify-between items-center">
          <h2 className="text-cyberorange text-5xl font-bold">Who We Are</h2>
          <p className="text-white w-full md:w-2/3">
            At Cyberware Global Defense (CGD), we are committed to protecting
            the digital future through innovative solutions that safeguard
            businesses from evolving cyber threats. Our expert team combines
            cutting-edge technology with a proactive approach to cybersecurity,
            ensuring that your organization remains secure, compliant, and
            resilient in the face of emerging challenges.
          </p>
          <div className="flex flex-col md:flex-row justify-between space-x-0 space-y-6 md:space-y-0 md:space-x-10 w-full md:w-2/3">
            <div className="flex items-center space-x-4 w-full md:w-1/3 text-white border-2 border-cyberorange py-2 px-5">
              <span>
                <svg
                  width="42"
                  height="38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.77 33.667c.122 0 .245-.03.367-.092.122-.06.214-.122.275-.183l15.033-15.033c.367-.367.634-.78.802-1.238.168-.458.252-.916.252-1.375a3.91 3.91 0 0 0-.252-1.398 3.028 3.028 0 0 0-.802-1.168l-7.791-7.792a3.028 3.028 0 0 0-1.17-.802 3.909 3.909 0 0 0-1.397-.252 3.97 3.97 0 0 0-1.375.252c-.458.168-.87.435-1.238.802l-.504.504 3.392 3.437c.458.428.794.917 1.008 1.467.214.55.321 1.13.321 1.742 0 1.283-.435 2.36-1.306 3.231-.871.87-1.948 1.306-3.231 1.306-.611 0-1.2-.107-1.765-.32a4.17 4.17 0 0 1-1.49-.963L16.462 12.4l-8.02 8.021a.95.95 0 0 0-.207.298.863.863 0 0 0-.069.344c0 .244.092.466.275.664a.848.848 0 0 0 .642.298c.122 0 .244-.03.366-.091.123-.062.214-.123.275-.184l6.234-6.233 2.566 2.567-6.187 6.233a.951.951 0 0 0-.206.298.879.879 0 0 0 .206.985.879.879 0 0 0 .642.275c.122 0 .244-.03.366-.091a1.07 1.07 0 0 0 .275-.184l6.234-6.187 2.566 2.567-6.187 6.233a.55.55 0 0 0-.207.275 1.039 1.039 0 0 0-.068.367.88.88 0 0 0 .275.641.88.88 0 0 0 .985.206.952.952 0 0 0 .298-.206l6.234-6.187 2.566 2.566-6.233 6.234a.95.95 0 0 0-.206.298.848.848 0 0 0 .23.985c.197.183.419.275.663.275Zm-.046 3.667c-1.13 0-2.13-.375-3.002-1.123a4.375 4.375 0 0 1-1.535-2.819c-1.039-.153-1.91-.58-2.613-1.283-.702-.703-1.13-1.574-1.283-2.613-1.039-.153-1.902-.588-2.59-1.306a4.662 4.662 0 0 1-1.26-2.59c-1.161-.152-2.108-.657-2.842-1.512-.733-.856-1.1-1.864-1.1-3.025 0-.611.115-1.2.344-1.765.23-.565.558-1.062.986-1.49L16.462 7.222l6.004 6.004a.55.55 0 0 0 .275.207c.122.045.245.068.367.068a.979.979 0 0 0 .687-.252.859.859 0 0 0 .275-.664c0-.123-.023-.245-.069-.367a.55.55 0 0 0-.206-.275l-6.554-6.554a3.028 3.028 0 0 0-1.169-.802 3.909 3.909 0 0 0-1.397-.252 3.97 3.97 0 0 0-1.376.252c-.458.168-.87.435-1.237.802l-6.463 6.508a3.67 3.67 0 0 0-.687.963 3.883 3.883 0 0 0-.367 1.1 3.461 3.461 0 0 0 .367 2.2l-2.658 2.658a7.29 7.29 0 0 1-1.146-2.315 7.201 7.201 0 0 1-.275-2.543 7.271 7.271 0 0 1 .641-2.498c.367-.81.871-1.536 1.513-2.177L9.449 2.82a7.736 7.736 0 0 1 2.453-1.604 7.296 7.296 0 0 1 2.773-.55c.947 0 1.871.183 2.772.55a7.224 7.224 0 0 1 2.407 1.604l.504.504.504-.504a7.736 7.736 0 0 1 2.452-1.604 7.296 7.296 0 0 1 2.773-.55c.947 0 1.872.183 2.773.55a7.224 7.224 0 0 1 2.406 1.604l7.746 7.746a7.166 7.166 0 0 1 1.604 2.43c.367.916.55 1.848.55 2.795 0 .947-.183 1.871-.55 2.773a7.224 7.224 0 0 1-1.604 2.406L23.979 35.96a4.757 4.757 0 0 1-1.49 1.008 4.401 4.401 0 0 1-1.765.367Z"
                    fill="#FF6F0F"
                  />
                </svg>
              </span>
              <div className="flex flex-col ">
                <span className="text-white font-semibold">
                  Trusted by over
                </span>
                <span className="text-cyberorange font-semibold">
                  100+ Organizations
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-1/3 text-white font-semibold border-2 border-cyberorange py-2 px-5">
              <span>
                <svg
                  width="38"
                  height="38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 37.334c-2.537 0-4.92-.482-7.15-1.444-2.231-.963-4.171-2.269-5.821-3.919-1.65-1.65-2.957-3.59-3.92-5.82C1.148 23.92.667 21.535.667 19c0-2.537.481-4.92 1.444-7.15.962-2.231 2.269-4.172 3.919-5.822 1.65-1.65 3.59-2.956 5.82-3.918C14.08 1.148 16.463.667 19 .667c2.537 0 4.92.481 7.15 1.444 2.23.962 4.171 2.268 5.821 3.918 1.65 1.65 2.956 3.59 3.919 5.821.962 2.23 1.444 4.614 1.444 7.15 0 2.536-.482 4.92-1.444 7.15-.963 2.23-2.269 4.171-3.919 5.821-1.65 1.65-3.59 2.956-5.82 3.919-2.231.962-4.614 1.444-7.15 1.444Zm-1.834-3.759V30c-1.008 0-1.872-.359-2.59-1.077-.718-.718-1.077-1.581-1.077-2.59V24.5l-8.8-8.8c-.091.55-.175 1.1-.252 1.65-.076.55-.114 1.1-.114 1.65 0 3.698 1.214 6.936 3.643 9.717 2.43 2.78 5.493 4.4 9.19 4.858Zm12.65-4.675a15.383 15.383 0 0 0 1.65-2.177c.489-.779.894-1.589 1.215-2.429.32-.84.565-1.703.733-2.59.168-.886.252-1.787.252-2.704 0-2.994-.833-5.729-2.498-8.204-1.665-2.475-3.888-4.262-6.669-5.362v.733c0 1.008-.359 1.872-1.077 2.59-.718.718-1.581 1.077-2.59 1.077h-3.666V13.5c0 .52-.176.955-.527 1.307a1.774 1.774 0 0 1-1.306.527h-3.667V19h11c.52 0 .955.176 1.306.527.352.352.527.787.527 1.307v5.5h1.834a3.54 3.54 0 0 1 2.154.71 3.623 3.623 0 0 1 1.329 1.856Z"
                    fill="#FF6F0F"
                  />
                </svg>
              </span>
              <div className="flex flex-col ">
                <span className="text-white font-semibold">Across</span>
                <span className="text-cyberorange font-semibold">
                  50+ countries
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-1/3 text-white font-semibold border-2 border-cyberorange py-2 px-5">
              <span>
                <svg
                  width="34"
                  height="34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 22.5v-11h11v11h-11Zm3.667-3.667h3.666v-3.666h-3.666v3.666ZM11.5 33.5v-3.667H7.833c-1.008 0-1.871-.359-2.59-1.077-.717-.718-1.076-1.581-1.076-2.59V22.5H.5v-3.667h3.667v-3.666H.5V11.5h3.667V7.833c0-1.008.359-1.871 1.077-2.59.718-.717 1.581-1.076 2.59-1.076H11.5V.5h3.667v3.667h3.666V.5H22.5v3.667h3.667c1.008 0 1.871.359 2.59 1.077.717.718 1.076 1.581 1.076 2.59V11.5H33.5v3.667h-3.667v3.666H33.5V22.5h-3.667v3.667c0 1.008-.359 1.871-1.077 2.59-.718.717-1.581 1.076-2.59 1.076H22.5V33.5h-3.667v-3.667h-3.666V33.5H11.5Zm14.667-7.333V7.833H7.833v18.334h18.334Z"
                    fill="#FF6F0F"
                  />
                </svg>
              </span>
              <div className="flex flex-col ">
                <span className="text-white font-semibold">
                  Use 100%{" "}
                  <span className="text-cyberorange font-semibold">
                    Innovative Technology
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Industries we serve  */}
      <div className="w-full border-b-4 border-cyberorange bg-white px-10 py-10 md:py-20">
          <HomeIndustries />
      </div>

       {/*  Team Leadership */}
      <div className="bg-cybergray ">
        <div className="w-full max-w-screen-xl container mx-auto flex flex-col justify-between items-center space-y-24 p-10">
          <h1 className="text-cyberorange text-5xl font-bold">
            Our leadership team
          </h1>
          <p className="text-white">
            Meet the leaders behind CGD’s mission to protect businesses from
            evolving cyber threats. With deep expertise in cybersecurity and IT
            consulting, our leadership team drives innovation and ensures the
            highest standards of security for our clients. Scroll down to see
            the faces behind our success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between gap-6 md:gap-12 lg:gap-24   pb-20">
            <LeaderShipTeam
              image="/furkan.jpeg"
              title="Furkan Bajrami"
              body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras at nunc."
            />

            <LeaderShipTeam
              image="/petar.png"
              title="Petar Ninovski"
              position='Co-Founder & CXX'
              body="Petar has over 10 years of experience in cybersecurity and IT consulting."
            />

            <LeaderShipTeam
              image="/lena.jpeg"
              title="Lena Müller"
              position='Chief Technology Officer (CTO)'
              body="With over 12 year of experience in cybersecurity and technology development."
            />
          </div>
        </div>
      </div>


      {/*  Partners  */}
      <div className="w-full border-b-4 border-cyberorange bg-white px-10 py-10 md:pb-20 overflow-hidden">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col  space-y-24 px-10 py-10 md:py-20 ">
          <HomePartners />
        </div>
      </div>
  {/*  NewsLetter  */}
      <div className="w-full  bg-white px-10 pb-10 md:pb-20">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col justify-between items-center space-y-24 px-10 pb-10 md:pb-20 w-ful">
          <div className="flex  flex-col w-full bg-cyberslate py-20 px-60 items-center justify-center space-y-14 -mt-40 ">
           <h3 className="text-3xl text-white font-semibold text-center">Reach out to our team at CGD, and we'll help you protect your digital future.</h3>
           <div className="flex"><input type="text" name="" id=""  placeholder="Email address" className="text-center px-24"/><button className="bg-cyberorange text-white px-14 py-2">Submit</button></div>
           

          </div>
        </div>
      </div>

            {/*  Partners  */}
      <div className="w-full  bg-white px-10 py-10 md:pb-20 overflow-hidden">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col md:flex-row space-y-24 px-10 py-10 md:py-20 ">
          <div className="flex w-full md:w-1/3 p-10 items-center"><img src="/ISOlogo.png" alt="" /></div>
          <div className="flex flex-col w-full md:w-2/3 space-y-12">
            <h3 className="text-cyberorange font-semibold text-5xl p-10">ISO Certification</h3>
            <p className="text-black text-3xl !font-medium">At <span className="text-cyberorange">CYBERWARE Global Defense</span>, we are proud to be ISO certified, demonstrating our commitment to the highest standards of cybersecurity. Our certification reflects our dedication to protecting your data and ensuring robust security practices across all operations. Trust us to safeguard your digital assets with proven excellence.
            </p>
            <div className="flex flex-col">
              <div className="py-5 flex justify-between items-center border-y border-black">
                <span className="font-semibold w-2/3">
                ISO/IEC 27000 — Information security management systems
                </span>
                
                <a href="/about-us">
                <span>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 16 12.46 27 10 24.433 18.081 16 10 7.567 12.46 5 23 16Z" fill="#FF6F0F"/>
                </svg>
                </span>
                </a>

              </div>
              <div className="py-5 flex justify-between items-center">
                <span className="font-semibold w-2/3">
                ISO/IEC 27001 — Information technology – Security Techniques – Information security management
                </span>
               <a href="/about-us">
                <span>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 16 12.46 27 10 24.433 18.081 16 10 7.567 12.46 5 23 16Z" fill="#FF6F0F"/>
                </svg>
                </span>
                </a>

              </div>
              <div className="py-5 flex justify-between items-center border-y border-black">
                <span className="font-semibold w-2/3">
                ISO/IEC 27002 — Code of practice for information security controls
                </span>
               <a href="/about-us">
                <span>
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 16 12.46 27 10 24.433 18.081 16 10 7.567 12.46 5 23 16Z" fill="#FF6F0F"/>
                </svg>
                </span>
                </a>
              </div>
            </div>
            <div className="flex justify-end">
              
            <a  href="/about-us" className="w-1/3 h-auto py-2 bg-orange-500 flex justify-center items-center">
          <div className="text-white text-sm md:text-base font-bold ">
            See All Certificates
          </div>
        </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-white px-10 py-10 md:pb-20 overflow-hidden">
        <div className="container mx-auto max-w-screen-xl w-full flex flex-col md:flex-row space-y-24 px-10 py-10 md:py-20 space-x-32">
          <div className="w-2/3 items-center flex">
            <h3 className="text-cyberorange font-semibold text-5xl">
            Stay informed with the latest threat insights delivered directly to your inbox through our Newsletter.
            </h3>
          </div>
          <div className="w-1/3 flex flex-col space-y-8  p-10 justify-end">
          <div className="w-full border-b-2 border-cyberlightGray flex justify-end py-2">
            <span>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h16c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2 8-5H4l8 5ZM4 8V6v12V8Z" fill="#A5A1A1"/>
              </svg>
            </span>
            <span className="text-cyberlightGray ml-4">
              Your Email
            </span>

          </div>
          <div className="w-full flex justify-end">
          <button   className=" h-auto py-2 px-3 bg-orange-500  items-center">
          <div className="text-white text-sm md:text-base font-bold ">
          Join for Free
          </div>
         </button>
          </div>
        
          </div>
        </div>
      </div>

      {/*  Who We Are  */}
      <div className="w-full border-t-4 border-cyberorange bg-white px-10 py-10 md:py-20">
      <h2 className="text-cyberorange text-5xl  text-center !font-medium">Join our happy customers!</h2>
        <SliderComponent/>
      </div>
    </>
  );
}
