export default function ContactUsPage() {
  return (
    <>
      <div className="py-12 bg-cybergray">
        <div className="container w-full mx-auto max-w-screen-xl">
          <h1 className="text-2xl text-center text-white">
            Your Cybersecurity Experts – Securing the Future Today
          </h1>
          <div className="p-6 flex flex-col lg:flex-row items-center">
            {/* Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 space-y-3">
              <p className="text-8xl text-cyberorange font-semibold">
                Contact us.
              </p>
              <p className="text-white text-3xl">
                We are here to help you secure your future
              </p>
              <div className="py-8 text-white">
                <p>Email: info@cyberg.com</p>
                <p>Phone: +49 123 456 789</p>
                <p>Address: Street, Berlin Germany</p>
              </div>
              <p className="text-white text-3xl pt-4">What happens next?</p>
              <div className="py-8 text-white relative space-y-8">
                {/* Step 1 */}
                <div className="flex items-start relative">
                  <div className="bg-cyberorange text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <p className="text-xl ml-4">
                    We’ll review your cybersecurity needs.
                  </p>
                  <div className="absolute left-5 top-10 w-0.5 h-full border-l-2 border-dashed border-white"></div>
                </div>
                {/* Step 2 */}
                <div className="flex items-start relative">
                  <div className="bg-cyberorange text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <p className="text-xl ml-4">
                    You’ll receive a customized security proposal.
                  </p>
                  <div className="absolute left-5 top-10 w-0.5 h-full border-l-2 border-dashed border-white"></div>
                </div>
                {/* Step 3 */}
                <div className="flex items-start relative">
                  <div className="bg-cyberorange text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <p className="text-xl ml-4">
                    Once approved, we’ll implement the solutions and support
                    you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="w-full lg:w-1/2  p-8 ">
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-cyberslate text-white   p-3 focus:outline-none focus:ring-2 focus:ring-cyberorange"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-cyberslate text-white  p-3 focus:outline-none focus:ring-2 focus:ring-cyberorange"
                  />
                </div>

                {/* Telephone Number */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Telephone number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full bg-cyberslate text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyberorange"
                  />
                </div>

                {/* Country Selection */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Select your country
                  </label>
                  <select className="w-full bg-cyberslate text-white p-3 focus:outline-none focus:ring-2 focus:ring-cyberorange">
                    <option>Your country</option>
                    <option>Germany</option>
                    <option>USA</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Send us a message
                  </label>
                  <textarea
                    placeholder="Your message"
                    rows="5"
                    className="w-full bg-cyberslate text-white  rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyberorange"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-cyberorange text-white font-medium py-3  hover:bg-orange-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
