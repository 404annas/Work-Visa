import React from "react";

const JobsSec = () => {
  const card = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon01.svg",
      content: "Technology & IT",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon02.svg",
      content: "Hospitality & Tourism",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon03.svg",
      content: "Finance & Accounting",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon04.svg",
      content: "Engineering & Software",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon05.svg",
      content: "Business & Management",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon06.svg",
      content: "Construction & Trades",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon07.svg",
      content: "Education & Training",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon08.svg",
      content: "Enviorment & Energy",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon09.svg",
      content: "Health & Technology",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/category-icon10.svg",
      content: "Science & Research",
    },
  ];

  return (
    <section className="bg-gray-100 px-2 sm:px-6 md:px-10 py-16 sm:py-20">
      {/* Section Header */}
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
            className="w-4 sm:w-5 md:w-6"
          />
          <h1 className="font-medium text-gray-600 text-sm sm:text-base md:text-lg">
            JOB CATEGORY
          </h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
            className="w-4 sm:w-5 md:w-6"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 text-center">
          Most Demanded Job
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {card.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:rotate-x-6 transition-transform duration-300 transform-gpu flex flex-col items-center text-center group hover:shadow-md"
          >
            <img
              src={card.image}
              alt={card.content}
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">
              {card.content}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="mt-10 relative overflow-hidden px-6 py-3 bg-green-500 text-white text-center font-semibold rounded-md group text-sm sm:text-base">
          <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
          <span className="relative z-10 sm:text-md text-sm">
            Get a Free Consultation
          </span>
        </button>
      </div>
    </section>
  );
};

export default JobsSec;
