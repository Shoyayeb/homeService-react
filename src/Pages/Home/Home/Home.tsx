import React from "react";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import ReviewRoot from "../Review/ReviewRoot/ReviewRoot";
import Feature from "./../Feature/Feature";
import Services from "./../Services/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Feature />
      <Services />
      <ReviewRoot />
    </div>
  );
};

export default Home;
