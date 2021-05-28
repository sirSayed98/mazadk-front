import React from "react";
import { GENERAL_HOST } from "../../Redux/constants/General";

import Link from "next/link";
import style from "./MazadCard.module.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
const MazadCard = ({ data, upComing }) => {
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
            <Link href={`/[mazad]/[id]`} as={`/mazad/${1}`}>
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
          <button className="btn master_button mt-1 mb-3 btn-lg btn-block">
            Join Auction
          </button>
        ) : (
          <button className="btn interest_button mt-1 mb-3 btn-lg btn-block">
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
