import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,

  
  
} from "react-icons/fa";
import {SiJavascript,SiMongodb} from "react-icons/si"
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
      icon: <SiJavascript className="commonIcons" />,
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
      icon: <SiMongodb className="commonIcons" />,
      heading: "MongoDB",
    },
    {
      id: 7,
      icon: <FaGithub className="commonIcons" />,
      heading: "Github",
    },
    {
      id: 8,
      icon: <FaBootstrap className="commonIcons" />,
      heading: "Bootstrap",
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