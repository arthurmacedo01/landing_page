import React from "react";
import whatsappIcon from "../assets/img/whatsappIcon.png";
import classes from "./WhatsAppLink.module.css"

function WhatsAppLink() {
  const phoneNumber = "+5512992599007"; // Your phone number here
  const message = encodeURIComponent("Olá, interesse no curso Internet das Coisas com ESP32!"); // Your pre-filled message

  return (
    <div className={classes.whatsappIcon}>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} height="60" alt="whatsappIcon" />
      </a>
    </div>
  );
}

export default WhatsAppLink;
