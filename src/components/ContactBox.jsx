import React from "react";
import { contactList } from "./../data/contactList";

const ContactBox = () => {
  return (
    <div className="contact-box">
      {contactList.map((item, index) => {
        return (
          <div className="contact-line">
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/assets/images/${item.icon}`}
            />
            <a href={item.link} target="blank">{item.text}</a>
          </div>
        );
      })}
    </div>
  );
};

export default ContactBox;
