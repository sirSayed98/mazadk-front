import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import BiddingCard from "../../components/BiddingCard/BiddingCard";
import Bidders from "../../components/Bidders/Bidders";

const id = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {router.query && <BiddingCard id={router.query.id} />}
      <div className="container">
        <Bidders  />
      </div>
    </>
  );
};

export default id;
