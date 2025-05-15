import React from "react";

const Process = () => {
  const processes = [
    {
      id: "1",
      heading: "Select country.",
      content:
        "Choose a country based on job opportunities, visa requirements, and lifestyle to match your career goals and preferences.",
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/process-icon01.svg",
    },
    {
      id: "2",
      heading: "Apply for work visa.",
      content:
        "Submit your application with the required documents through the official portal or embassy.",
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/process-icon02.svg",
    },
    {
      id: "3",
      heading: "Arrange all the requirements.",
      content:
        "Gather all necessary documents, such as identification, job offers, and language test results, based on the country’s visa criteria.",
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/process-icon03.svg",
    },
    {
      id: "4",
      heading: "Prepare for IELTS/ CELPIP//OET.",
      content:
        "Study and practice for the required language test to meet the visa’s language proficiency standards.",
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/process-icon04.svg",
    },
    {
      id: "5",
      heading: "Get work visa.",
      content:
        "Once approved, receive your work visa, allowing you to start your employment abroad.",
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/process-icon05.svg",
    },
  ];

  return (
    <section
      style={{ backgroundColor: "rgb(18, 28, 39)" }}
      className="px-6 md:px-40 pt-20 pb-80"
    >
      <div className="flex flex-col gap-4 items-center justify-center mb-12">
        <div className="flex gap-2 items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon02.svg"
            alt="Magic Icon"
          />
          <h1 className="font-medium text-white">WORK PROCESS</h1>
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
            alt="Magic Icon"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-white flex gap-3">
          Our <span className="text-amber-400">Process</span>
        </h1>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col gap-12">
        {processes.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-700 pb-6 gap-6"
          >
            {/* ID */}
            <div className="bg-green-600 text-white font-bold px-4 py-2 rounded-full">
              {item.id}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white mb-2">
                {item.heading}
              </h2>
              <p className="text-slate-300">{item.content}</p>
            </div>

            {/* Image */}
            <div className="w-24 h-24 transition-transform duration-300 hover:-translate-y-2">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
