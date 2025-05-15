import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full lg:h-screen h-fit 2xl:py-0 xl:py-0 lg:py-0 py-20 bg-contain bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://html.xpressbuddy.com/e.visa/assets/img/work-visa/hero-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="container mx-auto sm:px-4 px-2 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-white max-w-xl w-full">
            <div className="flex gap-4 items-center">
              <p className="text-sm sm:text-base">WE’R WORKING VISA GUIDANCE</p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
                alt=""
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">
              Hassle-Free Work
              <br />
              <span className="text-amber-400">Visa Guidance</span>
            </h1>
            <p className="text-base sm:text-lg">
              Get your work visa, ensuring a smooth and stress-free experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm sm:text-base">
              <div className="flex gap-3 items-start">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <p>Affordable & Competitive Fees.</p>
              </div>
              <div className="flex gap-3 items-start">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <p>High Success Rate.</p>
              </div>
              <div className="flex gap-3 items-start">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <p>Customer-Centric Approach.</p>
              </div>
              <div className="flex gap-3 items-start">
                <img
                  src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check.svg"
                  alt=""
                  className="w-5 h-5"
                />
                <p>End-to-End Support.</p>
              </div>
            </div>
          </div>

          {/* Right Content (Form) */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <h2 className="text-2xl text-center font-semibold mb-2 text-gray-800">
              Want to Apply Work Visa?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
              Get a free Consultation for a Work visa today!!
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border outline-none px-4 py-2 rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Email ID"
                className="border outline-none px-4 py-2 rounded w-full"
                required
              />
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  className="border outline-none px-4 py-2 rounded w-full"
                  type="text"
                  placeholder="Phone no"
                  required
                />
                <input
                  className="border outline-none px-4 py-2 rounded w-full"
                  type="text"
                  placeholder="Current City"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  className="border outline-none px-4 py-2 rounded w-full bg-white text-gray-500"
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="startup">Startup</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="agency">Agency</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="corporate">Corporate</option>
                </select>
                <select
                  className="border outline-none px-4 py-2 rounded w-full bg-white text-gray-500"
                  required
                >
                  <option value="">Select Visa Type</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="residence">Residence Visa</option>
                </select>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <input type="checkbox" />
                <p>I agree with terms and conditions</p>
              </div>
              <button
                type="submit"
                className="relative overflow-hidden px-6 py-3 bg-green-500 text-white font-semibold rounded-md group"
              >
                <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                <span className="relative z-10 lg:text-md text-sm">Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
