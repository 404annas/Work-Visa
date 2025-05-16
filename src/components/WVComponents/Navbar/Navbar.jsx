import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-gray-600 bg-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <div className="flex title-font font-medium items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/logo/logo-black.svg"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
            <p>Home</p>
          </div>

          <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
            <p>Pages</p>
          </div>

          <div className="font-bold text-black cursor-pointer">About Us</div>

          <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
            <p>Country</p>
          </div>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu className="w-6 h-6 mt-2" />
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 w-3/4 max-w-xs shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div>
            <img
              src="https://html.xpressbuddy.com/e.visa/assets/img/logo/logo-black.svg"
              alt="Logo"
              className="h-8"
            />
          </div>
          <button onClick={() => setMenuOpen(false)}>
            <FiX className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="p-4">
          {/* Accordion Menu */}
          {[
            {
              title: "Home",
            },
            {
              title: "Pages",
            },
            {
              title: "Country",
            },
          ].map((section, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                onClick={() => toggleAccordion(section.title)}
                className="w-full flex justify-between items-center font-semibold sm:text-base text-sm text-left text-black py-2"
              >
                <span>{section.title}</span>
              </button>
            </div>
          ))}

          <div
            className="block mt-4 text-black font-semibold sm:text-base text-sm"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
