import React, { useEffect } from "react";
import { VerifyEmail } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { popUpMessage } from "../../components/utils/sweetAlert";
import Navbar from "../../components/Navbar/Navbar";

const token = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query && router.query.token)
      dispatch(VerifyEmail(router.query.token))
        .then((res) => {
          popUpMessage(
            "Your email has been verified",
            "Welcome To Mazadk!",
            "success"
          );
          router.push("/");
        })
        .catch((err) => {
          popUpMessage("Failed", err, "error");
        });
  }, [router.query]);

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center text-center mt-5">
        <h3 className="display-3 text-center mt-2">Wait for verification</h3>
      </div>
    </>
  );
};

export default token;
