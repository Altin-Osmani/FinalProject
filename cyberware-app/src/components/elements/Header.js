"use client";
import React, { useState } from "react";
import Logo from "@/icons/logoOrange.svg";
import Icon1 from "@/icons/ServiceIcons/g21.svg";
import Icon2 from "@/icons/ServiceIcons/path7.svg";
import Icon3 from "@/icons/ServiceIcons/path9.svg";
import Icon4 from "@/icons/ServiceIcons/path15.svg";
import Icon5 from "@/icons/ServiceIcons/path11.svg";

export default function Header() {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-white text-black border-b border-gray-200 ">
        <div className="container mx-auto max-w-screen-xl px-4 flex justify-between items-center py-2 w-full">
          <Logo/>
          {/* Left Section */}
          <div className="flex items-center space-x-4 text-sm"></div>

          {/* Right Section */}

          <div className="md:flex items-center space-x-2 font-semibold hidden  ">
            <a href="/#" className="hover:text-cyberorange">
              Emergency Response Plan
            </a>
            <a href="/#" className="hover:text-cyberorange">
              Support
            </a>

            <button className="border border-gray-300 px-2 py-1 rounded hover:border-cyberorange space-x-2">
              <span className="font-semibold pr-2">DE</span>
              🌐
            </button>
          </div>
          <div className="flex md:hidden items-center space-x-4">
              <span>
                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.6 18-6.3-6.3A6.096 6.096 0 0 1 6.5 13c-1.817 0-3.354-.63-4.612-1.887C.629 9.854 0 8.317 0 6.5c0-1.817.63-3.354 1.887-4.612C3.146.629 4.683 0 6.5 0c1.817 0 3.354.63 4.613 1.887C12.37 3.146 13 4.683 13 6.5a6.096 6.096 0 0 1-1.3 3.8l6.3 6.3-1.4 1.4ZM6.5 11c1.25 0 2.313-.438 3.188-1.313C10.562 8.813 11 7.75 11 6.5c0-1.25-.438-2.313-1.313-3.188C8.813 2.438 7.75 2 6.5 2c-1.25 0-2.313.438-3.188 1.313C2.438 4.186 2 5.25 2 6.5c0 1.25.438 2.313 1.313 3.188C4.186 10.562 5.25 11 6.5 11Z" fill="#000"/>
                </svg>
                </span>
              <span>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a9.676 9.676 0 0 1-3.875-.788 10.144 10.144 0 0 1-3.188-2.15 10.142 10.142 0 0 1-2.15-3.187A9.676 9.676 0 0 1 2 12c0-1.383.263-2.68.788-3.887a10.183 10.183 0 0 1 2.15-3.175 10.143 10.143 0 0 1 3.187-2.15A9.676 9.676 0 0 1 12 2c1.383 0 2.68.263 3.887.788a10.183 10.183 0 0 1 3.175 2.15 10.184 10.184 0 0 1 2.15 3.175A9.649 9.649 0 0 1 22 12a9.676 9.676 0 0 1-.788 3.875 10.143 10.143 0 0 1-2.15 3.188 10.184 10.184 0 0 1-3.175 2.15A9.649 9.649 0 0 1 12 22Zm0-2.05c.433-.6.808-1.225 1.125-1.875.317-.65.575-1.342.775-2.075h-3.8c.2.733.458 1.425.775 2.075.317.65.692 1.275 1.125 1.875Zm-2.6-.4c-.3-.55-.563-1.12-.787-1.713A14.688 14.688 0 0 1 8.05 16H5.1a8.3 8.3 0 0 0 1.813 2.175A7.195 7.195 0 0 0 9.4 19.55Zm5.2 0a7.195 7.195 0 0 0 2.487-1.375A8.299 8.299 0 0 0 18.9 16h-2.95c-.15.633-.337 1.246-.563 1.837a13.857 13.857 0 0 1-.787 1.713ZM4.25 14h3.4a13.208 13.208 0 0 1-.15-2 13.208 13.208 0 0 1 .15-2h-3.4A7.959 7.959 0 0 0 4 12a7.959 7.959 0 0 0 .25 2Zm5.4 0h4.7a13.208 13.208 0 0 0 .15-2 13.208 13.208 0 0 0-.15-2h-4.7a13.208 13.208 0 0 0-.15 2 13.208 13.208 0 0 0 .15 2Zm6.7 0h3.4a7.953 7.953 0 0 0 .25-2 7.953 7.953 0 0 0-.25-2h-3.4a13.208 13.208 0 0 1 .15 2 13.208 13.208 0 0 1-.15 2Zm-.4-6h2.95a8.298 8.298 0 0 0-1.813-2.175A7.196 7.196 0 0 0 14.6 4.45c.3.55.563 1.12.787 1.712.226.592.413 1.205.563 1.838ZM10.1 8h3.8c-.2-.733-.458-1.425-.775-2.075A12.701 12.701 0 0 0 12 4.05c-.433.6-.808 1.225-1.125 1.875-.317.65-.575 1.342-.775 2.075Zm-5 0h2.95c.15-.633.337-1.246.563-1.838C8.838 5.571 9.1 5 9.4 4.45c-.933.3-1.763.758-2.488 1.375A8.298 8.298 0 0 0 5.1 8Z" fill="#000"/></svg>
              </span>
              <span>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4m16 5H4m16 5H4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hidden md:block relative bg-cybergray text-white">
        <div className="container mx-auto max-w-screen-xl px-4 flex justify-between items-center py-4">
          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <a href="/" className="hover:text-cyberorange font-semibold">
              Home
            </a>
            <a href="/about-us" className="hover:text-cyberorange font-semibold">
              About Us
            </a>

            {/* Services Dropdown */}
            <div className=" relative">
              <button
                className="hover:text-cyberorange font-semibold flex items-center"
                onClick={() => setMegaMenuOpen(!isMegaMenuOpen)}
              >
                Services{" "}
                <span className="text-cyberorange pl-2">
                  <svg
                    width="12"
                    height="8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4l-6 6Z"
                      fill="#FF6F0F"
                    />
                  </svg>
                </span>
              </button>
              {isMegaMenuOpen && (
                <div className="absolute top-12 -left-60 w-[170vh] bg-white/40 backdrop-blur-md text-black z-50">
                  <div className="container mx-auto p-8">
                    <div className="grid grid-cols-5 gap-8 justify-items-stretch">
                      {[
                        {
                          icon: <Icon1 className="w-14 pb-6" />,
                          title: "SIEM Threat Detection & Response",
                          description:
                            "Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business.",
                          items: [
                            "Define Security Goals",
                            "Select a SIEM Tool",
                            "Establish Data Sources",
                            "Normalize Data",
                            "Create Detection Rules",
                            "Implement Incident Response Procedures",
                            "Review and Update Regularly",
                          ],
                          link: "/service-1",
                        },
                        {
                          icon: <Icon2 className="w-14 pb-6" />,
                          title: "Penetration Testing",
                          description:
                            "Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services.",
                          items: [
                            "Pre-Engagement Interactions",
                            "Reconnaissance",
                            "Scanning",
                            "Vulnerability Assessment",
                            "Exploitation",
                            "Post-Exploitation",
                            "Reporting",
                          ],
                          link: "/service-2",
                        },
                        {
                          icon: <Icon3 className="w-14 pb-6" />,
                          title: "Incident Response",
                          description:
                            "In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly.",
                          items: [
                            "Preparation",
                            "Detection and Analysis",
                            "Prioritization",
                            "Containment",
                            "Eradication",
                            "Recovery",
                            "Post-Incident Review",
                          ],
                          link: "/service-3",
                        },
                        {
                          icon: <Icon4 className="w-14 pb-6" />,
                          title: "Network Security",
                          description:
                            "We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access.",
                          items: [
                            "Perform a Network Audit",
                            "Deploy Security Devices",
                            "Establish Strong Access Controls",
                            "Update Security Software",
                            "Secure Network Hardware",
                            "Implement Network Segmentation",
                            "Establish a Maintenance System",
                          ],
                          link: "/service-4",
                        },
                        {
                          icon: <Icon5 className="w-14 pb-6" />,
                          title: "Security Awareness Training",
                          description:
                            "Empower your employees to recognize and respond to potential cyber threats with our comprehensive security awareness programs.",
                          items: [
                            "Assess Organizational Needs",
                            "Get Buy-In from Leadership",
                            "Develop a Tailored Training Program",
                            "Implement Training Delivery Methods",
                            "Conduct Regular Training Sessions",
                            "Evaluate and Measure Effectiveness",
                          ],
                          link: "/service-5",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`p-6 space-y-4 h-full flex flex-col justify-between ${
                            index < 4 ? "border-r border-r-black" : ""
                          }`}
                        >
                          {/* Icon, Title, and Description */}
                          <div>
                            <div className="text-4xl">{item.icon}</div>
                            <h4 className="text-lg font-bold">{item.title}</h4>
                            <p className="text-sm text-black border-t border-b border-black py-2">
                              {item.description}
                            </p>
                            <ul className="text-sm text-black mt-4 space-y-2">
                              {item.items.map((subItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="py-2  border-b border-black"
                                >
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Button */}
                          <a
                            href={item.link}
                            className="inline-block px-4 py-2 text-black border border-cyberorange hover:bg-orange-700 hover:border-orange-700 transition duration-300 bg-cyberorange"
                          >
                            Explore {item.title}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/industries"
              className="hover:text-cyberorange font-semibold flex items-center space-x-4"
            >
              Industries{" "}
              <span className="ml-2">
                <svg
                  width="12"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4l-6 6Z"
                    fill="#FF6F0F"
                  />
                </svg>
              </span>
            </a>
            <a
              href="/partnership"
              className="hover:text-cyberorange font-semibold flex items-center"
            >
              Partnerships{" "}
              <span className="ml-2">
                <svg
                  width="12"
                  height="8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4l-6 6Z"
                    fill="#FF6F0F"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Right Section: Call-to-Actions */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="/contact-us"
              className="border border-cyberorange px-4 py-2 hover:bg-cyberorange hover:text-white"
            >
              Contact
            </a>
            <a href="/jobs" className="hover:text-cyberorange font-semibold">
              Jobs
            </a>
            <a
              href="/newsletter"
              className="hover:text-cyberorange font-semibold"
            >
              Newsletter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
