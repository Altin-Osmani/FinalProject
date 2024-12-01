import React from "react";
import Logo from "@/icons/logoOrange.svg"
export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-between">
        {/* Left Section: Logos and Links */}
        <div className="flex flex-col md:flex-row space-x-8 w-full">
          {/* Logos Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start lg:items-start justify-between border-r border-white p-4">
            {/* First Row: Round and Square Images */}  <Logo/>
            <div className="flex flex-col md:flex-row  items-center justify-center space-x-0 md:space-x-8 mb-8 space-y-4">
            
             
              <img
                src="/FooterImages/Zertificat.png"
                alt="ISO Certification"
                className="w-36 h-28 rounded-full"
              />
              <img
                src="/FooterImages/info-security.png"
                alt="Info Security"
                className="w-36 h-28"
              />
       
            </div>

            {/* Second Row: Rectangular Image */}
            <div className="pt-5">
              <img
                src="/FooterImages/allianz.png"
                alt="Allianz Logo"
                className="w-[253px] h-[89px]"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* First Row */}
            <div className="flex flex-col md:flex-row  gap-4 text-xs mt-4">
              <div>
                <h4 className="font-bold mb-2">Services</h4>
                <ul className="space-y-1">
                  <li>SIEM - 24/7 Threat Monitoring</li>
                  <li>Penetration Testing</li>
                  <li>Incident Management</li>
                  <li>Compliance & Risk Management</li>
                  <li>Security Awareness Training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">About Us</h4>
                <ul className="space-y-1">
                  <li>Mission Statement</li>
                  <li>Our Story</li>
                  <li>Our Expertise</li>
                  <li>Partnerships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Team</h4>
                <ul className="space-y-1">
                  <li>Co-Founder & CXX</li>
                  <li>Cybersecurity Specialists</li>
                  <li>Security Awareness Advisors</li>
                </ul>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4 text-xs mt-4">
              <div></div>
              <div>
                <h4 className="font-bold mb-2">Our Values</h4>
                <ul className="space-y-1">
                  <li>Innovation</li>
                  <li>Trust</li>
                  <li>Excellence</li>
                  <li>Collaboration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Industries We Serve</h4>
                <ul className="space-y-1">
                  <li>Finance</li>
                  <li>Healthcare</li>
                  <li>Government</li>
                  <li>Retail</li>
                  <li>eGame</li>
                  <li>Education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact and Map */}
        <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center space-y-8 lg:space-y-2">
          {/* Contact Section */}
          <div className="w-full h-auto bg-black p-4">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-1 bg-cyberslate text-white rounded border border-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-1 bg-cyberslate text-white rounded border border-gray-600"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-cyberslate text-white rounded border border-gray-600"
                rows="4"
              ></textarea>
              <label className="flex items-center space-x-2 text-xs">
                <input type="checkbox" className="accent-orange-500" />
                <span>I would like to receive the newsletter.</span>
              </label>
              <button
                type="submit"
                className="bg-cyberorange text-white px-4 py-2 text-lg rounded hover:bg-orange-600 w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="w-full h-auto space-y-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190027.32027278532!2d13.25992740222855!3d52.506938616191384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e1!3m2!1sen!2smk!4v1732143753269!5m2!1sen!2smk"  className="rounded-md" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="text-xs">
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>Berlin, Germany</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>000111222333</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@cybergd.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white py-4 text-sm">
        <div className="container mx-auto flex justify-between items-center text-xs">
          {/* Left Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-black font-semibold">
              Legal Notice
            </a>
            <a href="#" className="text-black font-semibold">
              Data Protection
            </a>
            <a href="#" className="text-black font-semibold">
              Terms of Use
            </a>
          </div>

       
          <div>
            <p className="text-black font-semibold">© Cyberware Global Defense</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
