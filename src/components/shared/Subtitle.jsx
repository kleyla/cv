import React from "react";

const Subtitle = (props) => {
  return (
    <>
      <h2 className="subtitle-text">{props.text}</h2>
      <span className="line"></span>
    </>
  );
};

export default Subtitle;
