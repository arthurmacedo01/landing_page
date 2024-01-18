import React from "react";
import classes from "./Coupon.module.css";

import couponImg from "../assets/img/coupon.png";

function Coupon({ disountSet }) {
  return (
    <div className={classes.coupon}>
      <a
        className="animated "
        data-bs-toggle="modal"
        href="#checkout"
        onClick={() => {
          disountSet("offDiscount=QUEROVINTE");
        }}
      >
        <img src={couponImg} height="100" alt="coupon" />
      </a>
    </div>
  );
}

export default Coupon;
