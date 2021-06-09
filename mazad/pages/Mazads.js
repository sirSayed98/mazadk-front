import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MazadsTable from "../components/Mazads/MazadsTable";
import {Animated} from "react-animated-css";
const Mazads = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <MazadsTable />
        </Animated>
      </div>
    </>
  );
};

export default Mazads;
