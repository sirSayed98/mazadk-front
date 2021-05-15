import React from "react";
import style from "./AdminCards.module.css";

const AdminCards = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col text-center mb-5">
            <h1 class="mb-2 display-4">MAZADK STATISTICS</h1>
          </div>
        </div>
        <div class="row mb-5">
          {[
            { number: 200, color: "card_purple_blue", attribute: "USERS" },
            { number: 300, color: "card_salmon_pink", attribute: "ADMINS" },
            { number: 300, color: "card_blue_green", attribute: "MERCHANTS" },
            { number: 300, color: "card_purple_pink", attribute: "MAZADS" },
            { number: 300, color: "card_salmon_pink", attribute: "REQUESTS" },
            { number: 1000, color: "card_blue_green", attribute: "TOTAL" }
          ].map((el) => {
            return (
              <div class="col-12 col-sm-6 col-md-6 mb-3">
                <div class={`${style.card} ${el.color} text-white`}>
                  <div class={`${style.card_body} text-center`}>
                    <div class="card-number">
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
