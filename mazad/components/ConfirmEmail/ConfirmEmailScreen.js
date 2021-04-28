import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { USER_REGISTER_REST } from "../../Redux/constants/userCosntants/types";

import style from "./ConfirmEmailScreen.module.css";
const ConfirmEmailScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userRegister = useSelector((state) => state.userRegister);
  const { success } = userRegister;

  useEffect(() => {
    if (!success) {
      router.push("/");
    }
    setTimeout(() => {
      dispatch({
        type: USER_REGISTER_REST,
      });
    }, 8000);
  }, [success]);
  return (
    <div className={`${style.card_container}`}>
      <div className={`${style.card_body} col-sm-12 col-lg-6 col-xl-4`}>
        <div className={`${style.card_header} mb-4 text-capitalize `}>
          <h1 className="display-4">Congratulation</h1>
          <h6 className="display-5">
            Please Check Your Email to complete your regestration
          </h6>
        </div>
        <div className={style.card_bottom}>
          <div className="px-5">
            <hr className={style.newLine} />
          </div>
          <button className="btn btn-lg master_button">
            <Link href="/">GO HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailScreen;
