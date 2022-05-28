import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaNodeJs,
  FaLeaf,
  
} from "react-icons/fa";
const Skills = () => {
  const [header] = React.useState({
    subHeading: "SKILLS",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
    },
    {
      id: 2,
      icon: <FaCss3 className="commonIcons" />,
      heading: "CSS",
    },
    {
      id: 3,
      icon: <FaJava className="commonIcons" />,
      heading: "JavaScript",
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "React",
    },
    {
      id: 5,
      icon: <FaNodeJs className="commonIcons" />,
      heading: "NodeJS",
    },
    {
      id: 6,
      icon: <FaLeaf className="commonIcons" />,
      heading: "MongoDB",
    },
  ]);
  return (
    <div className="services" id="Skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info,id) => (
              <div className="col-4 bgMain" key={id}>
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;