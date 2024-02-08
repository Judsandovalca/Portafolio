import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function App() {
  return (
     <main className="text-gray-400 bg-gray-900 body-font">
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-QPM5MPVK45"></script>
     <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'G-QPM5MPVK45');
      </script>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
