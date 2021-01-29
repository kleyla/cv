import React from "react";
import { technologies } from "./../data/techonlogies";

const Technologies = () => {
  return (
    <div className="one-column">
      <ul>
        {technologies.map((item, index) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Technologies;
