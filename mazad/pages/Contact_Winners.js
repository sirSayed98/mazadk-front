import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactTablet from "../components/ContactWinners/Table_Contact_winners";
import { Animated } from "react-animated-css";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Contact_Winners = () => {
  const router = useRouter();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo == null) {
      router.push("/");
      return;
    }
    if (userInfo.role !== "merchant") {
      router.push("/");
      return;
    }
  }, []);

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
