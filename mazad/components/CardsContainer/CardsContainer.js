import React from "react";
import CardComponent from "../MazadCard/MazadCard";
import style from "./CardsContainer.module.css";

const CardContainer = () => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          padding: "10px",
        }}
      >
        <div
          className={`${style.scrollBar}`}
          style={{
            overflow: "auto",
            display: "flex",
          }}
        >
          <div
            style={{
              marginRight: "15px",
            }}
          >
            <CardComponent />
          </div>
          <div
            style={{
              marginRight: "15px",
            }}
          >
            <CardComponent />
          </div>
          <div
            style={{
              marginRight: "15px",
            }}
          >
            <CardComponent />
          </div>
          <div
            style={{
              marginRight: "15px",
            }}
          >
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
