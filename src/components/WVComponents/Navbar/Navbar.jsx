import React, { useState } from "react";
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
        <div to="/" className="flex title-font font-medium items-center">
          <img
            src="https://html.xpressbuddy.com/e.visa/assets/img/logo/logo-black.svg"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <p>Home</p>
              <p>+</p>
            </div>
            <div className="absolute left-0 top-full mt-4 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-red-600 cursor-pointer">Dashboard</li>
                <li className="hover:text-red-600 cursor-pointer">Settings</li>
                <li className="hover:text-red-600 cursor-pointer">Profile</li>
                <li className="hover:text-red-600 cursor-pointer">Logout</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <p>Pages</p>
              <p>+</p>
            </div>
            <div className="absolute left-0 top-full mt-4 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <div to="/" className="hover:text-red-600">
                    Student Visa
                  </div>
                </li>
                <li>
                  <div to="/" className="hover:text-red-600">
                    Work Visa
                  </div>
                </li>
                <li className="hover:text-red-600 cursor-pointer">Services</li>
                <li className="hover:text-red-600 cursor-pointer">Pricing</li>
                <li className="hover:text-red-600 cursor-pointer">FAQs</li>
              </ul>
            </div>
          </div>

          <div className="font-bold text-black hover:text-red-600" to="/about">
            About Us
          </div>

          <div className="relative group">
            <div className="font-bold cursor-pointer text-black flex gap-2 items-center">
              <p>Country</p>
              <p>+</p>
            </div>
            <div className="absolute left-0 top-full mt-4 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-red-600 cursor-pointer">USA</li>
                <li className="hover:text-red-600 cursor-pointer">Canada</li>
                <li className="hover:text-red-600 cursor-pointer">Australia</li>
                <li className="hover:text-red-600 cursor-pointer">UK</li>
              </ul>
            </div>
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
          <div to={"/"}>
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
              items: ["Dashboard", "Settings", "Profile", "Logout"],
            },
            {
              title: "Pages",
              items: [
                <div to="/" onClick={() => setMenuOpen(false)}>
                  Student Visa
                </div>,
                <div to="/" onClick={() => setMenuOpen(false)}>
                  Work Visa
                </div>,
                "Services",
                "Pricing",
                "FAQs",
              ],
            },
            {
              title: "Country",
              items: ["USA", "Canada", "Australia", "UK"],
            },
          ].map((section, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <button
                onClick={() => toggleAccordion(section.title)}
                className="w-full flex justify-between items-center font-semibold text-left text-black py-2"
              >
                <span>{section.title}</span>
                <span className="text-xl">
                  {activeAccordion === section.title ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeAccordion === section.title
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="hover:text-red-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div
            to="/"
            className="block mt-4 text-black font-semibold hover:text-red-600"
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
