import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileScreen from "../components/Profile/ProfileScreen";
import { Animated } from "react-animated-css";
const Profile = () => {
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
