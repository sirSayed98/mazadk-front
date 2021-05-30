import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { GENERAL_HOST } from "../../Redux/constants/General";
import {
  JoinMazad,
  InterestMazad,
  HomeUpComingMazads,
} from "../../Redux/actions/mazadActions";
import { popUpMessage } from "../utils/sweetAlert";

import Link from "next/link";
import style from "./MazadCard.module.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MazadCard = ({ data, upComing }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { userInfo } = userLogin;

  const MySwal = withReactContent(Swal);

  const Join = (id) => {
    if (userInfo !== undefined && userInfo !== null) {
      MySwal.fire({
        title: "Do you want to join Mazad?",
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(JoinMazad(data._id))
            .then((res) => {
              popUpMessage("You have Joined !", "Bid Now!", "success");
              router.push(`/mazad/${data._id}`);
            })
            .catch((err) => {
              popUpMessage("Failed To join", err, "error");
            });
          dispatch(HomeUpComingMazads());
        }
      });
    } else {
      router.push("/Login");
    }
  };
  const Interest = (id) => {
    if (userInfo !== undefined && userInfo !== null) {
      setLoading(true);
      dispatch(InterestMazad(data._id))
        .then((res) => {
          popUpMessage(
            "Good Luck!",
            `Mazad Will start at ${data.start_time}`,
            "success"
          );
          setLoading(false);
        })
        .catch((err) => {
          popUpMessage("Failed", err, "error");
          setLoading(false);
        });
    } else {
      router.push("/Login");
    }
  };

  return (
    <>
      <div className={`${style.mazad_container}`}>
        <div className={`${style.mazad_card_body}`}>
          <div className={`${style.mazad_img_box} mr-2`}>
            <div>
              <img
                className={`${style.mazad_img}`}
                src={GENERAL_HOST + data.photo}
              />
            </div>
          </div>

          <div className={`${style.mazad_card_text} text-left `}>
            <Link href={`/[mazad]/[id]`} as={`/mazad/${data._id}`}>
              <h1>{data.name}</h1>
            </Link>

            <p>{data.describtion}</p>
            <h6>
              <span>Market Price :</span>
              <span>{data.market_price}$</span>
            </h6>
            <h6>
              <span>Expected Price :</span>
              <span>{data.expected_price}$</span>
            </h6>
            <h6>
              <span>Price Until Now :</span>
              <span>{data.current_price}$</span>
            </h6>
          </div>
        </div>

        {!upComing ? (
          <button
            onClick={() => Join(data._id)}
            className="btn master_button mt-1 mb-3 btn-lg btn-block"
          >
            Join Auction
          </button>
        ) : (
          <button
            onClick={() => Interest(data._id)}
            disabled={loading}
            className="btn interest_button mt-1 mb-3 btn-lg btn-block"
          >
            <NotificationsActiveIcon
              style={{ transform: "translate(-5px,4px)" }}
            />{" "}
            Interest
          </button>
        )}
      </div>
    </>
  );
};

export default MazadCard;
