import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const cardContent = [
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/about-img01.jpg",
      heading: "900 +",
      content: "Success Story",
      start: 0,
      end: 900,
    },
    {
      image:
        "https://html.xpressbuddy.com/e.visa/assets/img/work-visa/about-img02.jpg",
      heading: "11,000 +",
      content: "Clients Trust Us",
      start: 0,
      end: 11000,
    },
  ];

  return (
    <section className="bg-white px-2 sm:px-10 py-14">
      <div className="flex flex-col items-center">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-16 sm:gap-10 gap-4">
          <div className="flex flex-col lg:w-1/2 w-full sm:text-center text-left">
            <div className="flex items-center sm:justify-center justify-start gap-4 mb-4">
              <p className="font-semibold tracking-wide">ABOUT US</p>
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
                alt="Magic Icon"
              />
            </div>
            <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Over 15+ Years of Work
            </h1>
            <h1 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Visa Expertise
            </h1>
          </div>

          <div className="flex flex-col lg:w-1/2 w-full sm:text-center text-left">
            <p className="text-gray-500 my-4 sm:my-6">
              With over 15 years of experience in work visa services, we bring
              unmatched expertise to guide you through every step of the
              process. Our reliable and efficient solutions tailored to your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:justify-center justify-start gap-4 sm:gap-8">
              <div className="flex gap-2 items-center">
                <p className="text-green-500">&#10004;</p>
                <p className="font-medium">Global Network of Partners.</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-green-500">&#10004;</p>
                <p className="font-medium">Up-to-Date Information.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full"
        >
          {cardContent.map((item, idx) => (
            <div key={idx} className="relative flex flex-col w-full lg:w-1/2">
              {/* Image with Overlay */}
              <img
                className="rounded-3xl w-full h-56 sm:h-64 object-cover"
                src={item.image}
                alt="About Image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

              {/* Card Overlay */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-[90%] sm:w-[80%] md:w-[70%] flex flex-col items-center">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                  <span className="bg-orange-300 rounded-full p-4">
                    <img
                      src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/medal-star.svg"
                      alt="Medal Star"
                    />
                  </span>
                  <div className="flex flex-row sm:flex-col items-center gap-2">
                    {inView && (
                      <h1 className="text-3xl sm:text-5xl font-semibold mb-2">
                        <CountUp
                          start={item.start}
                          end={item.end}
                          duration={3}
                        />
                        +
                      </h1>
                    )}
                    <p className="text-gray-600 text-md">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
