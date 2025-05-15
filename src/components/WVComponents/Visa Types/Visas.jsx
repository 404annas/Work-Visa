import React from "react";

const Visas = () => {
  const visaTypes = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-1B Visa",
      content:
        "The H-1B visa lets employers hire skilled foreign workers in fields like IT, engineering, and medicine.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "L-1 Visa",
      content:
        "The L-1 visa allows companies to transfer specialized employees to the U.S.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "J-1 Visa",
      content:
        "The J-1 visa supports exchange for employment, research, and culture, fostering skill development.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "O-1 Visa",
      content:
        "The O-1 visa is for individuals with exceptional achievements in fields like arts, sciences,business.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "TN-Visa",
      content:
        "The TN visa, under NAFTA, allows Canadian and Mexican specialists to work in the U.S.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-28 Visa",
      content:
        "The H-2B visa allows temporary non-agricultural workers in industries like hospitality and construction.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "H-2A Visa",
      content:
        "The H-2A visa lets firms hire temporary foreign agricultural workers when needed.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "P-Visa",
      content:
        "The P visa covers athletes, entertainers, and artists, including P-1 for athletes and P-2 for artists.",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/check2.svg",
      heading: "E-3 Visa",
      content:
        "The E-3 visa offers Australian professionals opportunities in specialist occupations, like H-1B.",
    },
  ];

  return (
    <section className="bg-white px-2 sm:px-10 py-20 -mt-56">
      {/* Section Heading */}
      <div className="flex flex-col gap-4 items-center justify-center mb-12 text-center">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
            className="w-6 sm:w-8 md:w-10"
          />
          <h1 className="font-medium text-black text-sm sm:text-base md:text-lg">
            VISA TYPES
          </h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
            className="w-6 sm:w-8 md:w-10"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black">
          Available Types Of Visa
        </h1>
      </div>

      {/* Visas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visaTypes.map((visa, idx) => (
          <div key={idx} className="border-b border-slate-300 pb-6">
            <div className="flex items-start gap-4">
              <img
                src={visa.image}
                alt={visa.heading}
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mt-1"
              />
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                  {visa.heading}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  {visa.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="relative overflow-hidden px-6 py-3 bg-green-500 text-white font-semibold rounded-md w-fit group text-sm sm:text-base">
          <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
          <span className="relative z-10 text-black sm:text-md text-sm">
            Get a Free Consultation
          </span>
        </button>
      </div>
    </section>
  );
};

export default Visas;
