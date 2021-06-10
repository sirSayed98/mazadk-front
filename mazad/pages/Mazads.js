import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MazadsTable from "../components/Mazads/MazadsTable";
import { Animated } from "react-animated-css";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Mazads = () => {
  const router = useRouter();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo == null) {
      router.push("/");
      return;
    }
    if (userInfo.role === "user") {
      router.push("/");
      return;
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
      <h1 className="display-3 mb-2">Mazads</h1>
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
