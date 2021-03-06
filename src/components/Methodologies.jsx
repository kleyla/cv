import React from "react";
import { methodologies } from "./../data/methodologies";

const Methodologies = () => {
  return (
    <div className="one-column">
      <ul>
        {methodologies.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Methodologies;
