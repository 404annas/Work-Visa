import React from "react";
import Navbar from "../components/WVComponents/Navbar/Navbar";
import Hero from "../components/WVComponents/Hero/Hero";
import SmallSec from "../components/WVComponents/Small Section/SmallSec";
import About from "../components/WVComponents/About/About";
import JobsSec from "../components/WVComponents/Jobs Section/JobsSec";
import Process from "../components/WVComponents/Work Process/Process";
import Team from "../components/WVComponents/Team/Team";
import Visas from "../components/WVComponents/Visa Types/Visas";
import Testimonials from "../components/WVComponents/Testimonials/Testimonials";
import Blog from "../components/WVComponents/Blogs/Blog";
import Faq from "../components/WVComponents/Faqs/Faq";
import Contact from "../components/WVComponents/Contact/Contact";
import Footer from "../components/WVComponents/Footer/Footer";

const WorkVisa = () => {
  return (
    <div className="min-h-screen pt-8">
      <Navbar />
      <Hero />
      <SmallSec />
      <About />
      <JobsSec />
      <Process />
      <Team />
      <Visas />
      <Testimonials />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default WorkVisa;
