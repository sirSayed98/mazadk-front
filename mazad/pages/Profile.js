import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileScreen from "../components/Profile/ProfileScreen";
import { Animated } from "react-animated-css";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";


const Profile = () => {
  const router = useRouter();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo == null) {
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
        <ProfileScreen />
      </Animated>
    </>
  );
};

export default Profile;
