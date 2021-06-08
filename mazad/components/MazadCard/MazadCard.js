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
import { RelativeDate } from "../utils/GetCurrentTime";
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
          <div
            className={`${style.mazad_img_box} mr-2 d-flex align-items-center`}
          >
            <div>
              <img
                className={`${style.mazad_img}`}
                src={GENERAL_HOST + data.photo}
              />
            </div>
          </div>

          <div className={`${style.mazad_card_text} text-left `}>
            <h1 className="text-center">{data.name}</h1>

            <p className="text-center">{data.describtion}</p>

            <ul
              style={{ paddingInlineStart: "0px" }}
              className="list-group-flush"
            >
              {[
                {
                  label: upComing ? "Start Price" : "Current Price",
                  value: data.current_price,
                },
                { label: "Expected Price", value: data.expected_price },
                {
                  label: upComing ? "Interested" : "Subscribers",
                  value: upComing
                    ? data.interested_subscribers.length
                    : data.subscribers.length,
                },
                {
                  label: upComing ? "Start Time" : "End Time",
                  value: RelativeDate(
                    upComing ? data.start_time : data.end_time
                  ),
                },
              ].map((el) => {
                return (
                  <li
                    key={el.label}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {el.label}
                    <span className="badge">{el.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {!upComing ? (
          <button
            onClick={() => Join(data._id)}
            className="btn master_button mt-1 mb-3 btn-lg btn-block"
            disabled={
              loading ||
              (userInfo && userInfo.role === "merchant") ||
              (userInfo && userInfo.role === "admin")
            }
          >
            Join Auction
          </button>
        ) : (
          <button
            onClick={() => Interest(data._id)}
            disabled={
              loading ||
              (userInfo && userInfo.role === "merchant") ||
              (userInfo && userInfo.role === "admin")
            }
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
