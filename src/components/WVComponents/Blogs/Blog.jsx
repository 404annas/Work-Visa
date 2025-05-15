import React from "react";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 sm:px-6 md:px-10 py-16 md:py-24 mx-auto flex flex-col">
        {/* Top Text */}
        <div className="w-full mb-12 md:mb-20 text-center md:text-left">
          <div className="flex flex-row items-center justify-center gap-4 mb-4 md:mb-6">
            <h1 className="text-lg md:text-xl font-medium text-gray-900">
              BLOG & INSIGHTS
            </h1>
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/magic-icon.svg"
              alt="Magic Icon"
              className="w-6 h-6"
            />
          </div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight max-w-3xl">
            Latest Blog & Insights
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap -mx-1 md:-mx-2">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-40 sm:h-48 md:h-64 object-cover object-center rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img01.jpg"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-40 sm:h-48 md:h-64 object-cover object-center rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img02.jpg"
              />
            </div>
            <div className="p-1 md:p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-[300px] object-cover object-center rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img05.jpg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="p-1 md:p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-[300px] object-cover object-center rounded-3xl"
                src="https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=2000&auto=format&fit=crop&q=200"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-40 sm:h-48 md:h-64 object-cover object-center rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img03.jpg"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-40 sm:h-48 md:h-64 object-cover object-center rounded-3xl"
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/blog-img04.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 md:mt-16 mb-10">
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

export default Blog;
