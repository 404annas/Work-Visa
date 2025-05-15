import React from "react";

const SmallSec = () => {
  return (
    <section className="bg-white border-b-2 border-gray-200 px-2 sm:px-10 py-10 sm:py-14">
      <div className="flex flex-col items-start lg:flex-row justify-between gap-6 text-center lg:text-left">
        <h1 className="text-xl font-semibold text-gray-800">
          Contact our experts via either phone or email
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-2 items-center">
            <span className="p-2 bg-orange-300 rounded-full">
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/call-icon.svg"
                alt="Call Icon"
              />
            </span>
            <p>Call: +91 590 088 55</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="p-2 bg-orange-300 rounded-full ml-8">
              <img
                src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/message-icon.svg"
                alt="Message Icon"
              />
            </span>
            <p>Mail: e.visa@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallSec;
