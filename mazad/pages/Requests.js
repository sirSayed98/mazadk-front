import React from "react";
import RequestsTable from "../components/RequestsTable/RequestsTable";
import Navbar from "../components/Navbar/Navbar";



const Requests = () => {
  return (
    <>
      <Navbar />
      <div className="container">
          <h3 className='display-4 mt-2 mb-2'> Requests</h3>
        <RequestsTable  />
      </div>
    </>
  );
};

export default Requests;
