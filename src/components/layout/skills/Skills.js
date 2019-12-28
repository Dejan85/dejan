import React, { useState } from "react";

//Hooks
import useSkillsBar from "../../hooks/skills/useSkillsBar";

// components
import Card from "./Card";

const Skills = () => {
  const { skillBar } = useSkillsBar();
  const [data] = useState([
    { name: "Html", percent: 90 },
    { name: "Webpack", percent: 20 },
    { name: "Css/Sass", percent: 80 },
    { name: "Node Js", percent: 20 },
    { name: "Javascript", percent: 80 },
    { name: "Mongo Db", percent: 20 },
    { name: "React/Redux", percent: 80 },
    { name: "Ejs", percent: 20 }
  ]);

  const [fontAwesomeIcon] = useState([
    {
      name: "Static",
      iconName: "fab fa-html5",
      list: [
        "Psd to html pixel perfect",
        "Responsive web page",
        "Hands coding from scratch"
      ]
    },
    {
      name: "Frontend",
      iconName: "fab fa-js-square",
      list: ["CRUD App", "SPA Applications", "Custom CMS"]
    },
    {
      name: "Fullstack",
      iconName: "fab fa-node-js",
      list: ["MERN STACK", "SSR", "REST App"]
    }
  ]);

  return (
    <div className="skills">
      <div className="skills__container">
        <h6 className="skills__h6">What i know?</h6>
        <h2 className="skills__h2">My Skills</h2>
        {/* <p className="skills__p">
					Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
				</p> */}
        <div className="skills__bars">
          {data &&
            data.map(item => {
              return skillBar(item.name, item.percent);
            })}
        </div>
        <div className="skills__content">
          <h6 className="skills__h6">What i do?</h6>
          <h2 className="skills__h2">Static, Frontend, Fullstack...</h2>
          {/* <p className="skills__p">
						Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
					</p> */}
        </div>
        <div className="skills__cardContainer">
          {fontAwesomeIcon &&
            fontAwesomeIcon.map(item => {
              return <Card cardInfo={item} key={item.name} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
