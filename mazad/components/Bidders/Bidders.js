import React from "react";
import style from "./Bidders.module.css";
import { useSelector } from "react-redux";
import { GENERAL_HOST } from "../../Redux/constants/General";
import { Animated } from "react-animated-css";

const Bidders = () => {
  const { singleMazad: Mazad } = useSelector((state) => state.Mazad);
  return (
    <>
      <h1 className="display-3">Bidders</h1>
      <hr />
      {Mazad && Mazad.higher_bidder && (
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="d-flex justify-content-center">
            <div className={`${style.highestBidder} text-center`}>
              <img
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://mazadk.vercel.app/default.png";
                }}
                className={`${style.rounded} ${style.highBidderImg}`}
                src={GENERAL_HOST + Mazad.higher_bidder.photo}
              />
              <h2 className="mt-3 display-4"> {Mazad.higher_bidder.name}</h2>
            </div>
          </div>
        </Animated>
      )}
      <div className={`${style.grid_container} mb-5`}>
        {Mazad &&
          Mazad.subscribers.map((el) => {
            return (
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div
                  key={el._id}
                  className={`text-center mt-3 mb-3 ${style.cardBidder}`}
                >
                  <img
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://mazadk.vercel.app/default.png";
                    }}
                    className={`${style.rounded} ${style.Bidder}`}
                    src={GENERAL_HOST + el.photo}
                  />
                  <h4 className="mt-3"> {el.name}</h4>
                </div>
              </Animated>
            );
          })}
      </div>
    </>
  );
};

export default Bidders;
