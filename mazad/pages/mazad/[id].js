import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import BiddingCard from "../../components/BiddingCard/BiddingCard";
import Bidders from "../../components/Bidders/Bidders";
import { useSelector } from "react-redux";

const id = (props) => {
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
      {router.query && (
        <BiddingCard mazadData={props.data} id={router.query.id} />
      )}
      <div className="container">
        <Bidders />
      </div>
    </>
  );
};

export default id;

export async function getServerSideProps(context) {
  if (context) {
    // to generate page from server
    const res = await fetch(
      `https://mmazadk.herokuapp.com/api/v1/mazads/${context.query.id}`
    );
    const { data } = await res.json();

    
    delete data.subscribers;
    delete data.interested_subscribers;
    delete data.higher_bidder;
    console.log(data);
    return { props: { data } };
  }
}
