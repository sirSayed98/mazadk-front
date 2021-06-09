import React, { useState, useEffect } from "react";
import { ResetPassword } from "../../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { popUpMessage } from "../../components/utils/sweetAlert";
import { RESET_PASSWORD_RESET } from "../../Redux/constants/userCosntants/types";
import Navbar from "../../components/Navbar/Navbar";
import { Animated } from "react-animated-css";
const forget_password = () => {
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const userRest = useSelector((state) => state.userRest);
  const { loading, error, success } = userRest;

  const handleReset = () => {
    dispatch(ResetPassword(router.query.token, password));
  };

  useEffect(() => {
    if (success) {
      popUpMessage("You Can Login now", "Rest Password done!", "success");
      dispatch({
        type: RESET_PASSWORD_RESET,
      });
      router.push("/Login");
    }
    if (error) {
      popUpMessage("Failed To Reset", error, "error");
    }
  }, [error, success]);

  return (
    <>
      <Navbar />

      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="container">
          <div className={`card_container mt-5`}>
            <div className={`card_body col-sm-12 col-lg-6 col-xl-4`}>
              <div className={`card_header mb-4 text-capitalize `}>
                <h1 className="display-5">Reset Password</h1>
              </div>
              <div className={"card_bottom"}>
                <div className="form-group px-4">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    name="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter new password"
                  />
                </div>
                <button
                  onClick={handleReset}
                  disabled={loading}
                  className="btn btn-lg master_button"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </Animated>
    </>
  );
};

export default forget_password;
