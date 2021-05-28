import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardComponent from "../MazadCard/MazadCard";
import style from "./CardsContainer.module.css";
import {
  HomeCurrentMazads,
  HomeUpComingMazads,
} from "../../Redux/actions/mazadActions";

const CardContainer = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { homeNowMazads, homeUpComing } = useSelector((state) => state.Mazad);
  useEffect(() => {
    dispatch(HomeCurrentMazads());
    dispatch(HomeUpComingMazads());
  }, [userInfo]);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          padding: "10px",
        }}
      >
        <h1 className="display-4 ml-4 mt-4 mb-3">Auctions Now</h1>
        <div
          className={`${style.scrollBar}`}
          style={{
            overflow: "auto",
            display: "flex",
          }}
        >
          {homeNowMazads &&
            homeNowMazads.map((el) => {
              return (
                <div
                  style={{
                    marginRight: "15px",
                  }}
                >
                  <CardComponent data={el} />
                </div>
              );
            })}
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          padding: "10px",
        }}
       
      >
        <h1 className="display-4 ml-4 mb-3">Up Coming</h1>
        <div
          className={`${style.scrollBar}`}
          style={{
            overflow: "auto",
            display: "flex",
          }}
        >
          {homeUpComing &&
            homeUpComing.map((el) => {
              return (
                <div
                  style={{
                    marginRight: "15px",
                  }}
                >
                  <CardComponent data={el} upComing={true} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
