import React from "react";
import classes from "./Coupon.module.css";

import couponImg from "../assets/img/coupon50.png";

function Coupon({ disountSet }) {
  return (
    <div className={classes.coupon}>
      <a
        className="animated"
        data-bs-toggle="modal"
        href="#checkout"
        onClick={() => {
          disountSet("offDiscount=50DEJUNHO");
        }}
      >
        <img src={couponImg} height="100" alt="coupon" />
      </a>
    </div>
  );
}

export default Coupon;
