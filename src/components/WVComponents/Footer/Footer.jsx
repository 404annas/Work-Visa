import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="text-white body-font"
      style={{
        backgroundImage: `url(https://html.xpressbuddy.com/e.visa/assets/img/bg/footer_bg.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-between -translate-y-20 px-10">
        <motion.img
          src="https://html.xpressbuddy.com/e.visa/assets/img/shape/cs_01.png"
          alt=""
          className=""
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="https://html.xpressbuddy.com/e.visa/assets/img/shape/cs_03.png"
          alt=""
          className="w-20 h-20"
          animate={{ y: [0, 20, 0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="https://html.xpressbuddy.com/e.visa/assets/img/shape/cs_02.png"
          alt=""
          className=""
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container px-5 pt-20 mx-auto">
        <div className="flex justify-between flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-10">
              OUR ADDRESS
            </h2>
            <p>Sunshine Business park, Floor No 05A,Sector-94,Ukrine</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-10">
              OPENING HOURS
            </h2>
            <p>Monday - Saturday</p>
            <p>11:00 AM - 10:00 PM</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-10">
              OFF DAY
            </h2>
            <p>Saturday</p>
            <p>11:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col mt-20">
            <img
              className="text-white"
              src="https://html.xpressbuddy.com/e.visa/assets/img/work-visa/logo.svg"
              alt="Logo"
            />
            <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
              © 2023 E.Visa —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @e.visa
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
