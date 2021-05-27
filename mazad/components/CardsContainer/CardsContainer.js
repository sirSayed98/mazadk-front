import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardComponent from "../MazadCard/MazadCard";
import style from "./CardsContainer.module.css";
import { HomeCurrentMazads } from "../../Redux/actions/mazadActions";

const CardContainer = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { homeNowMazads } = useSelector((state) => state.Mazad);
  useEffect(() => {
    dispatch(HomeCurrentMazads());
  }, [userInfo]);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          padding: "10px",
        }}
      >
        {/* <button onClick={() => console.log(homeNowMazads)}>Test</button> */}

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
    </>
  );
};

export default CardContainer;
