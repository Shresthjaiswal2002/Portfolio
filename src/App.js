import React,{useEffect} from "react";
import Home from "./components/Home";
 import Specializing from "./components/Specializing";
 import About from './components/About';
import LatestProjects from './components/LatestProjects';
import Qualification from './components/Qualification';
 import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {

    AOS.init({
      duration: 1000,
    });

   
  }, []);
  
  return (
    <div>
      <Home />
      <Specializing />
       <About /> 
      <LatestProjects />
      <Qualification />
      <Testimonials />
       <Footer /> 
    </div>
  );
};

export default App;