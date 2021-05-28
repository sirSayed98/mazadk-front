import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MazadsTable from "../components/Mazads/MazadsTable";

const Mazads = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <MazadsTable />
      </div>
    </>
  );
};

export default Mazads;
