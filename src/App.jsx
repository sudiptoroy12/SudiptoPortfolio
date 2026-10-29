import "./App.css";
import { MotionConfig } from "framer-motion";
import Home from "./components/home/Home"


import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About"
import Skill from "./components/skill/Skill";
import Footer from "./components/footer/Footer";






function App() {


  return (
    <MotionConfig reducedMotion="user">

   {/* Ambient cyan/purple glow layer - defined once in index.css */}
   <div aria-hidden="true" className="ambient-glow" />

   <Home/>
    <About/>
   <Skill/>
    <Projects/>
    <Contact/>
    <Footer/>

    </MotionConfig>
  )
}

export default App
