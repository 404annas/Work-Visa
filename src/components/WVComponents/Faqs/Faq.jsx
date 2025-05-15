import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "How Do I Apply For a Work Visa?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
    {
      title: "What Documents So I Need to Apply for A Work Visa?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment,qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
    {
      title: "How Long Does it Take to Process a Work Visa?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment,qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
    {
      title: "What Happens if My Work Visa is Denied?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment,qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
    {
      title: "Can I Bring My Family With Me On a Work Visa?",
      content:
        "To apply for a work visa, secure a job offer and submit required documents, such as proof of employment,qualifications, and financial stability, to the immigration office. Requirements may vary by country.",
    },
  ];

  return (
    <section className="px-2 sm:px-4 py-10 bg-gray-100">
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="font-medium text-black text-base sm:text-lg">FAQ</h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-black flex gap-2">
          Common Questions Answered
        </h1>
      </div>

      <div className="w-full px-2 sm:px-6 md:px-10 my-10 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-6 sm:py-8 text-left font-semibold bg-white hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="text-base sm:text-lg md:text-xl">
                {item.title}
              </span>
              <span className="text-lg sm:text-xl">
                {openIndex === index ? <ImCross /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`transition-all duration-300 px-6 overflow-hidden ${
                openIndex === index ? "max-h-44 py-6 sm:py-8" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                {item.content}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                • Comprehensive Visa Assistance.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                • Visa Category Expertise
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                • Transparency and Communication
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative">
        {/* <img
          className="absolute top-[155px] left-[500px]"
          src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/flan02.png"
          alt="Shape"
        /> */}
        <img
          src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/faq-shape.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};

export default Faq;
