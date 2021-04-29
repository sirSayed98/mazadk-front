import React, { useState, useEffect } from "react";
import { ForgetPassword } from "../Redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { popUpMessage } from "../components/utils/sweetAlert";
import { FORGET_PASSWORD_RESET } from "../Redux/constants/userCosntants/types";
import Navbar from "../components/Navbar/Navbar";

const forget_password = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const userForget = useSelector((state) => state.userForget);
  const { loading, error, success } = userForget;

  const handleForget = () => {
    dispatch(ForgetPassword(email));
  };
  useEffect(() => {
    if (success) {
      popUpMessage("Check Your Email", "Rest Password now!", "success");
      dispatch({
        type: FORGET_PASSWORD_RESET,
      });
      router.push("/");
    }
    if (error) {
      popUpMessage("Failed To Send", error, "error");
    }
  }, [error, success]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={`card_container mt-5`}>
          <div className={`card_body col-sm-12 col-lg-6 col-xl-4`}>
            <div className={`card_header mb-4 text-capitalize `}>
              <h1 className="display-5">Forget Password</h1>
            </div>
            <div className={"card_bottom"}>
              <div className="form-group px-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <button
                onClick={handleForget}
                disabled={loading}
                className="btn btn-lg master_button"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forget_password;
