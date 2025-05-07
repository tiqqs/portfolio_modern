
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimatedSections from "@/components/ScrollAnimatedSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Services />
        <ScrollAnimatedSections />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
