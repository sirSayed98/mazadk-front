import React, { useEffect } from "react";
import { useRouter } from "next/router";

import EditMazadScreen from "../../components/EditMazad/EditMazadScreen";
import Navbar from "../../components/Navbar/Navbar";

import { Animated } from "react-animated-css";
const EditMazad = () => {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        {router.query.id && <EditMazadScreen id={router.query.id} />}
      </Animated>
    </>
  );
};

export default EditMazad;
