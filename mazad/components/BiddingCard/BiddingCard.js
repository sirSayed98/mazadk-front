import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetSingleMazad, BidNow } from "../../Redux/actions/mazadActions";
import { popUpMessage } from "../utils/sweetAlert";
import { GENERAL_HOST } from "../../Redux/constants/General";
import style from "./BiddingCard.module.css";

import { TimeNow } from "../utils/GetCurrentTime";
import { Animated } from "react-animated-css";

const BiddingCard = ({ id }) => {
  const dispatch = useDispatch();
  const { singleMazad: Mazad } = useSelector((state) => state.Mazad);

  const [loading, setLoading] = useState(false);
  const bid = (id) => {
    setLoading(true);

    dispatch(BidNow(id, Mazad.current_price + Mazad.increased_value))
      .then((res) => {
        popUpMessage("Keep on", "You are the heighest Bidder!", "success");
        setLoading(false);
      })
      .catch((err) => {
        popUpMessage("Failed", err, "error");
        setLoading(false);
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
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className={`${style.cardContainer} mb-5`}>
                <div
                  className={`${style.imgBox}  d-flex justify-content-center mt-4`}
                >
                  <img
                    className={`${style.imgCard} d-block`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://mazadk.vercel.app/default_mazad.png";
                    }}
                    src={GENERAL_HOST + Mazad.photo}
                  />
                </div>
                <div>
                  <div className={`mt-1 text-center`}>
                    <h3 className="display-5">{Mazad.name}</h3>
                    <h5 className="display-5">{Mazad.describtion}</h5>
                    <ul
                      style={{ paddingInlineStart: "0px" }}
                      className="list-group-flush"
                    >
                      {[
                        {
                          label: "Current Price",
                          value: Mazad.current_price,
                        },
                        {
                          label: "Expected Price",
                          value: Mazad.expected_price,
                        },
                        {
                          label: "Start Time",
                          value: Mazad.start_time,
                        },
                        {
                          label: "End Time",
                          value: Mazad.end_time,
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
                  <div className="d-flex justify-content-center mt-4">
                    <button
                      onClick={() => bid(Mazad._id)}
                      className={`${style.btn_Bid} btn mb-3`}
                      disabled={
                        Mazad.finished || loading || Mazad.end_time < TimeNow()
                      }
                    >
                      Bid With
                      <span>
                        {" "}
                        {Mazad.current_price + Mazad.increased_value}$
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      )}
    </>
  );
};

export default BiddingCard;
