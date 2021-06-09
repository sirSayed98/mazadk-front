import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactTablet from "../components/ContactWinners/Table_Contact_winners";
import { Animated } from "react-animated-css";
const Contact_Winners = () => {
  return (
    <>
      <Navbar />
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <ContactTablet />
      </Animated>
    </>
  );
};

export default Contact_Winners;
