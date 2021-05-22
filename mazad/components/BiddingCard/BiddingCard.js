import React from "react";
import style from "./BiddingCard.module.css";
const BiddingCard = () => {
  return (
    <>
      <div className={`${style.biddingContainer} containner`}>
        <div className="d-flex justify-content-center mt-5">
          <div className={`${style.cardContainer}`}>
            <div
              className={`${style.imgBox}  d-flex justify-content-center mt-4`}
            >
              <img className={`${style.imgCard} d-block`} src="../iphone.png" />
            </div>
            <div>
              <div className={`${style.cardHeader} mt-1 text-center`}>
                <h3 className="display-5">I-Phone Pro</h3>
                <h5 className="display-5">64GB, Midnight Green</h5>
                <h5 className="display-5">
                  Latest Bid | <span>$500</span>{" "}
                </h5>
                <h6 className="display-5">
                  Price Market | <span>$300</span>{" "}
                </h6>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className={`${style.btn_Bid} btn`}>
                  Bid With<span> 600$</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiddingCard;
