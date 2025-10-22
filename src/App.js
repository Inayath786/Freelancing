import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import WhyChooseMe from "./WhyChooseMe";
import Pricing from "./Pricing";
import Testimonials from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Faq from "./FAQ";
import AboutMe from "./Aboutme";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Portfolio />
      <WhyChooseMe />
      <Pricing />
      <Testimonials />
      <Contact />
      <Faq/>
      <Footer />
    </div>
  );
}
