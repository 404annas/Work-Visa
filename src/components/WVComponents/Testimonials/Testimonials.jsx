import React, { useState } from "react";
import { Company } from "../wvComponents"; // Make sure this is correctly imported

const Testimonials = () => {
  const testimonial = [
    {
      name: "Benjamin Charles",
      destination: "Biomedical Engineer at CoreSpace",
      image: "⭐",
      rating: "5.0",
      text: "The professionalism and efficiency of the Work Visa Services team were beyond impressive. They handled all the paperwork and legalities for me, ensuring everything was in order for my move to the USA. I am Highly recommended!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-usa.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img01.jpg",
    },
    {
      name: "Jessica Marie",
      destination: "Senior Financial Analyst at Innovative",
      image: "⭐",
      rating: "4.8",
      text: "Moving abroad for work was a big step, and the team made the transition much smoother. They were clear, professional, and handled everything. I couldn’t have asked for a better experience!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-germany.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img02.jpg",
    },
    {
      name: "Christopher Allen",
      destination: "Construction Laborer at Focus Point",
      image: "⭐",
      rating: "4.9",
      text: "I was in a rush to get a work visa for a job abroad, and this team delivered. They handled everything quickly, provided clear guidance, and made the process seamless. My visa was approved within weeks. Highly recommend their fast and reliable service!",
      country:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flag-canada.jpg",
      person:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/avatar-img03.jpg",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="px-2 sm:px-10 py-20 bg-[#121c27]">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="font-medium text-white text-sm sm:text-base">
            TESTIMONIALS
          </h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white flex gap-2">
          Our <span className="text-amber-400">Customers!</span>
        </h1>
      </div>
      {/* Testimonial Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {testimonial.map((t, idx) => {
          const isOpen = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-500 hover:shadow-xl relative"
              onClick={() => toggleExpand(idx)}
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.person}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-slate-800 text-base">
                    {t.name}
                  </h2>
                  <p className="text-sm text-slate-500">{t.destination}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                {isOpen ? t.text : `${t.text.slice(0, 110)}...`}
              </p>

              {/* Flag + Rating */}
              <div className="flex justify-between items-center">
                <img
                  src={t.country}
                  alt="Flag"
                  className="w-6 h-4 object-cover rounded shadow"
                />
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  {t.image.repeat(Math.floor(parseFloat(t.rating)))}
                  <span className="ml-1 text-slate-600 font-medium">
                    {t.rating}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Company />
    </section>
  );
};

export default Testimonials;
