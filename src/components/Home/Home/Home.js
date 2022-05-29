import React from "react";
import InfoSection from "../../InfoSection/InfoSection";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <InfoSection></InfoSection>
    </div>
  );
};

export default Home;
