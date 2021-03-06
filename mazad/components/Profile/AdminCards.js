import React, { useEffect, useState } from "react";
import style from "./AdminCards.module.css";

import { STATISTICS } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

const AdminCards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(STATISTICS()).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);

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
              number: data && data.users,
              color: "card_purple_blue",
              attribute: "USERS",
            },
            {
              number: data && data.admins,
              color: "card_salmon_pink",
              attribute: "ADMINS",
            },
            {
              number: data && data.merchants,
              color: "card_blue_green",
              attribute: "MERCHANTS",
            },
            {
              number: data && data.total_users,
              color: "card_purple_pink",
              attribute: "TOTAL USERS",
            },
            {
              number: data && data.total_requests,
              color: "card_salmon_pink",
              attribute: "REQUESTS",
            },
            {
              number: data && data.total_Mazads,
              color: "card_blue_green",
              attribute: "MAZAD",
            },
          ].map((el) => {
            return (
              <div className="col-12 col-sm-6 col-md-6 mb-3">
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

export default AdminCards;
