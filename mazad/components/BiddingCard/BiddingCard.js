import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetSingleMazad, BidNow } from "../../Redux/actions/mazadActions";
import { popUpMessage } from "../utils/sweetAlert";
import { GENERAL_HOST } from "../../Redux/constants/General";

import style from "./BiddingCard.module.css";

const BiddingCard = ({ id }) => {
  const dispatch = useDispatch();
  const { singleMazad: Mazad } = useSelector((state) => state.Mazad);

  const bid = (id) => {
    dispatch(BidNow(id, Mazad.current_price + Mazad.increased_value))
      .then((res) => {
        popUpMessage("Keep on", "You are the heighest Bidder!", "success");
      })
      .catch((err) => {
        popUpMessage("Failed", err, "error");
      });
  };
  useEffect(() => {
    if (id !== undefined) {
      dispatch(GetSingleMazad(id));
    }
  }, [id]);

  return (
    <>
      {Mazad && (
        <div className={`${style.biddingContainer} containner`}>
          <div className="d-flex justify-content-center mt-5">
            <div className={`${style.cardContainer}`}>
              <div
                className={`${style.imgBox}  d-flex justify-content-center mt-4`}
              >
                <img
                  className={`${style.imgCard} d-block`}
                  src={GENERAL_HOST + Mazad.photo}
                />
              </div>
              <div>
                <div className={`${style.cardHeader} mt-1 text-center`}>
                  <h3 className="display-5">{Mazad.name}</h3>
                  <h5 className="display-5">{Mazad.describtion}</h5>
                  <h5 className="display-5">
                    Latest Bid | <span>${Mazad.current_price}</span>{" "}
                  </h5>
                  <h6 className="display-5">
                    Price Market | <span>${Mazad.market_price}</span>{" "}
                  </h6>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    onClick={() => bid(Mazad._id)}
                    className={`${style.btn_Bid} btn`}
                  >
                    Bid With
                    <span> {Mazad.current_price + Mazad.increased_value}$</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BiddingCard;
