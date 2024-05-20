import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import HomeBanner from "../components/homeBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeBanner/>
    </div>
  );
};

export default Home;
