import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/skills";
import React from "react"

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative gradient text-white ">

          <CustomCursor />

          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}