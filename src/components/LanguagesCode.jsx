import React from "react";
import { firstColumn, secondColumn } from "../data/languagesCode";

const LanguagesCode = () => {
  return (
    <div className="two-columns">
      <ul>
        {firstColumn.map((item, index) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <ul>
        {secondColumn.map((item, indes) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default LanguagesCode;
