import React from "react";
import { courses } from "./../data/courses";

const Courses = () => {
  return (
    <table>
      {courses.map((item, index) => {
        return (
          <tr>
            <td>
              <p className="date-place">
                {item.year} <br />
                {item.country}
              </p>
            </td>
            <td>
              <a
                href={item.link}
                className="course-link"
                title="Show"
                target="blank"
              >
                {item.name}
              </a>
              <p className="institution">
                {item.institution} -
                <span className="instructor">{item.instructor}</span>
              </p>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Courses;
