import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import BiddingCard from "../../components/BiddingCard/BiddingCard";
const id = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {router.query && <BiddingCard id={router.query.id} />}
    </>
  );
};

export default id;
