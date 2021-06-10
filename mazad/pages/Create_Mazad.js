import React, { useEffect } from "react";

import Navber from "../components/Navbar/Navbar";
import MazadForm from "../components/MazadForm/MazadForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Create_Mazad = () => {
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
      <Navber />
      <MazadForm />
    </>
  );
};

export default Create_Mazad;
