import React from "react";

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://html.xpressbuddy.com/e.visa/assets/img/work-visa/cta-bg02.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="rounded-xl text-white max-w-2xl relative z-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Let’s Discuss The Details
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
          We offer tailored work visa solutions, guiding you through every step
          to ensure a smooth and efficient process for your international job
          move.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button className="relative overflow-hidden px-5 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-md w-fit group text-sm sm:text-base">
            <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
            <span className="relative z-10 text-black sm:text-md text-sm">
              Get a Free Consultation
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
