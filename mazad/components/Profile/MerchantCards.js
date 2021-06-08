import React, { useEffect, useState } from "react";
import style from "./AdminCards.module.css";

import { MerchantStats } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

const MerchantCards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(MerchantStats()).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);
  //   currentMazads: 1
  //   finishedMazads: 2
  //   upcomingMazads: 1
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center mb-5">
            <h1 className="mb-2 display-4">MAZADK STATISTICS</h1>
          </div>
        </div>
        <div className="row mb-5">
          {[
            {
              number: data && data.upcomingMazads,
              color: "card_purple_blue",
              attribute: "UPCOMING",
            },
            {
              number: data && data.currentMazads,
              color: "card_salmon_pink",
              attribute: "CURRENT",
            },
            {
              number: data && data.finishedMazads,
              color: "card_blue_green",
              attribute: "FINISHED",
            },
            {
              number: data && data.total,
              color: "card_purple_pink",
              attribute: "TOTAL",
            },
          ].map((el) => {
            return (
              <div className="col-12 col-sm-6 col-md-6 mb-5">
                <div className={`${style.card} ${el.color} text-white`}>
                  <div className={`${style.card_body} text-center`}>
                    <div className="card-number">
                      <small className="text-center">
                        <strong>{el.number}</strong>
                      </small>
                      <div>
                        <h3>{el.attribute}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MerchantCards;
