import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import BiddingCard from "../../components/BiddingCard/BiddingCard";
import Bidders from "../../components/Bidders/Bidders";
import { useSelector } from "react-redux";

const id = () => {
  const router = useRouter();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo === null) {
      router.push("/Login");
    }
  }, []);
  return (
    <>
      <Navbar />
      {router.query && <BiddingCard id={router.query.id} />}
      <div className="container">
        <Bidders />
      </div>
    </>
  );
};

export default id;
