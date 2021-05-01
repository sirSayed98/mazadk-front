import React from "react";

import style from "./MazadCard.module.css";

const MazadCard = () => {
  return (
    <>
      <div className={`${style.mazad_container}`}>
        <div className={`${style.mazad_card_body}`}>
          <div className={`${style.mazad_img_box}`}>
            <div>
              <img className={`${style.mazad_img}`} src="./iphone.png" />
            </div>
          </div>

          <div className={`${style.mazad_card_text} text-left `}>
            <h1>iPhone Pro</h1>

            <p>short discribtion mvmvmvmv</p>
            <h6>
              <span>Market Price :</span>
              <span>400$</span>
            </h6>
            <h6>
              <span>Expected Price :</span>
              <span>400$</span>
            </h6>
            <h6>
              <span>Price Until Now :</span>
              <span>400$</span>
            </h6>
          </div>
        </div>
        <button className="btn master_button mt-3 mb-3 btn-lg btn-block">
          Join Auction
        </button>
      </div>
    </>
  );
};

export default MazadCard;
