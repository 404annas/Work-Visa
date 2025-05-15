import React from "react";

const Company = () => {
  const company = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo01.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo02.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo03.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo04.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo05.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo06.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo07.png",
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/brand-logo08.png",
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="grid grid-cols-5 gap-12 border border-slate-500 rounded-xl p-12 bg-white/5 backdrop-blur-sm">
        {/* Heading */}
        <div className="col-span-5 md:col-span-2 flex items-center justify-center">
          <p className="text-amber-400 text-lg md:text-4xl font-semibold text-center">
            World’s best 120 companies work with us
          </p>
        </div>

        {/* First row of 3 logos */}
        {company.slice(0, 3).map((c, idx) => (
          <div
            key={idx}
            className="col-span-2 sm:col-span-1 flex justify-center items-center"
          >
            <img
              src={c.image}
              alt={`Brand ${idx}`}
              className="max-h-16 sm:max-h-20 md:max-h-24 object-contain opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}

        {/* Second row: remaining 5 logos */}
        {company.slice(3).map((c, idx) => (
          <div
            key={idx + 3}
            className="col-span-2 sm:col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <img
              src={c.image}
              alt={`Brand ${idx + 3}`}
              className="max-h-16 sm:max-h-20 md:max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
