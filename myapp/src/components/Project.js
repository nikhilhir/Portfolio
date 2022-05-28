import React from "react";
import { FaGithub,FaShareSquare } from "react-icons/fa";


const Project = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Bewakoof.com Clone",
      img: "./images/Bewakoof.png",
      link: "https://cloneofbewakoof.netlify.app/",
      repolink: "https://github.com/nikhilhir/Bewakoof.com--Project-?organization=nikhilhir&organization=nikhilhir",
      p:"This is a clone of Bewakoof.com.is a E-Commerce website for Clothes and Accessories, on-trend clothing at affordable prices. We try to build a Bewakoof.com clone using Html, CSS, and JavaScript"
    },
    {
      id: 2,
      heading: "Nordstromrack Clone",
      img: "./images/NordstromRack.png",
      link: "https://lustrous-eclair-2f1c6d.netlify.app/index.html",
      repolink: "https://github.com/nikhilhir/Nordstromrack_clone",
      p:"A US-based e-commerce website.where users can purchase clothes, accessories, household, and lifestyle products. we have cloned using Html, CSS, and JavaScript and json-server"
    },
    {
      id: 3,
      heading: "Be Bodywise Clone",
      img: "./images/BeBodywise.png",
      link: "#",
      repolink: "https://github.com/nikhilhir/TeamFriends",
      p:"Be Bodywise is a website provides diagnostics and e-pharmacy.It is e-commerce where users purchase health care products. plus free online consultation from the team of doctors for women’s health &wellness. "
    },
    {
      id: 4,
      heading: "TATA 1mg Clone",
      img: "./images/TATA_1mg.png",
      link: "https://relaxed-mousse-6ea758.netlify.app/",
      repolink: "https://github.com/nikhilhir/clone1mg",
      p:"Tata 1mg, is a healthcare platform based in Gurgaon, India. It provides services, including e-pharmacy, diagnostics, e-consultation and health content.we have cloned using Html, CSS, and JavaScript,React,Redux and json-server "
    },
  ]);
  return (
    <div className="prices" id="Projects">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>

          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-40" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <img className="imgx" src={prices.img} alt=""></img>
                </div>
                <p id="desc">{prices.p}</p>

                <div className="price__btn">
                  <a
                    href={prices.link}
                    className="btn btn-outline"
                    target='_blank'
                    style={{color:"white"}}
                  >
                   <FaShareSquare style={{fontSize:"22px", paddingTop:"5px",color:"white"}}/>
                  </a>
                  <a
                    href={prices.repolink}
                    className="btn btn-outline"
                    id="descShow"
                    target='_blank'
                  >
                    <FaGithub style={{fontSize:"25px", paddingTop:"5px",color:"white"}}/>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;