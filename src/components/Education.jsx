import React from "react";
import { education } from "./../data/education";

const Education = () => {
  return (
    <table>
      <tbody>
        {education.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <p className="date-place">
                  {item.year} <br />
                  {item.city}, <br />
                  {item.country}
                </p>
              </td>
              <td>
                {item.link ? (
                  <a
                    href={`${process.env.PUBLIC_URL}/assets/pdfs/${item.link}`}
                    className="course-link"
                    title="Show"
                    target="blank"
                  >
                    {item.course}
                  </a>
                ) : (
                  <p className="course">{item.course}</p>
                )}
                <p className="institution">{item.institution}</p>
                {item.instructor ? (
                  <p className="instructor">{item.instructor}</p>
                ) : (
                  ""
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Education;
