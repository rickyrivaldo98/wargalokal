import React, { useState, useEffect } from "react";
import NavbarLanding from "./components/NavbarLanding";
import Header from "./components/Header";
import Konten1 from "./components/Konten1";
import Konten2 from "./components/Konten2";
import Konten3 from "./components/Konten3";
import Konten4 from "./components/Konten4";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <NavbarLanding />
      <Header />
      <Konten1 />
      <Konten2 />
      <Konten3 />
      <Konten4 />
      <Footer />
    </>
  );
};

export default Landing;
