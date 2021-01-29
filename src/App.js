import React from "react";
import "./App.css";
import Header from "./components/Header";
import ContactBox from "./components/ContactBox";
import Subtitle from "./components/shared/Subtitle";
import Objective from "./components/Objective";
import LanguagesCode from "./components/LanguagesCode";
import Technologies from "./components/Technologies";
import Methodologies from "./components/Methodologies";
import Languages from "./components/Languages";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Works from "./components/Works";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="left">
          <ContactBox />
          <div className="box">
            <Subtitle text="Objetivos" />
            <Objective />
          </div>
          <div className="box">
            <Subtitle text="languages (code)" />
            <LanguagesCode />
          </div>
          <div className="box">
            <Subtitle text="technologies" />
            <Technologies />
          </div>
          <div className="box">
            <Subtitle text="methodologies" />
            <Methodologies />
          </div>
          <div className="box">
            <Subtitle text="languages" />
            <Languages />
          </div>
        </div>
        <div className="right">
          <div className="box">
            <Subtitle text="education" />
            <Education />
          </div>
          <div className="box">
            <Subtitle text="online courses" />
            <Courses />
          </div>
          <div className="box">
            <Subtitle text="work experience" />
            <Works />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
