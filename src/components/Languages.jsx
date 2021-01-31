import React from "react";
import { languages } from "./../data/languages";

const Languages = () => {
  return (
    <div className="one-column">
      <ul>
        {languages.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Languages;
