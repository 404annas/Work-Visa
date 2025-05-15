import React from "react";

const Team = () => {
  return (
    <section className="px-6 sm:px-10 py-10">
      <div className="relative -translate-y-60 lg:-translate-y-60">
        {/* Background image on lg+ */}
        <div className="hidden lg:block">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/cta-banner.jpg"
            alt="Banner"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Orange background on small screens */}
        <div className="lg:hidden bg-orange-400 rounded-2xl w-full h-full min-h-[400px]"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 py-10 lg:py-0 rounded-2xl">
          <div className="flex flex-col gap-4 max-w-2xl text-black">
            <div className="flex gap-3 items-center">
              <p className="font-medium uppercase">we're skilled team</p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-black-icon.svg"
                alt="Magic Icon"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Ensure your good workplace with us!!
            </h2>
            <p className="text-sm sm:text-base max-w-lg">
              Achieve your career goals with our expert support, ensuring a
              smooth path to your ideal workplace.
            </p>
            <button className="relative overflow-hidden px-6 py-3 bg-white text-white font-semibold rounded-md w-fit group">
              <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
              <span className="relative z-10 text-black">
                Get a Free Consultation
              </span>
            </button>
          </div>

          {/* "We work since" only on lg */}
          <div className="hidden lg:flex flex-col gap-3 absolute top-4 right-12">
            <h1 className="font-semibold text-white">WE WORK SINCE</h1>
            <h1 className="ml-6 font-semibold text-5xl text-slate-900">2010</h1>
          </div>

          {/* Airplane image only on lg */}
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flan.png"
            alt="Airplane"
            className="hidden lg:block absolute bottom-4 right-6 w-28 lg:w-36"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
