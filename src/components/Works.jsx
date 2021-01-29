import React from "react";
import { works } from "./../data/works";

const Works = () => {
  return (
    <table>
      {works.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <p className="date-place">
                {item.from} to {item.to} <br />
                {item.city}
              </p>
            </td>
            <td>
              <p className="course">{item.position}</p>
              <p className="institution">{item.company}</p>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Works;
