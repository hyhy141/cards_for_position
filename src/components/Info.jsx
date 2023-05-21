import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Info = () => {
  const person = {
    name: "Laura Smith",
    position: "Web Developer",
    web: "laurasmith.website",
    img: require("../assets/Rectangle 90.png"),
  };

  return (
    <div className="info">
      <div className="info_img">
        <img src={person.img} />
      </div>
      <div className="info_inner">
        <h1 className="info_name">{person.name}</h1>
        <p className="info_position">{person.position}</p>
        <p className="info_web">{person.web}</p>
      </div>
      <div className="info_btns">
        <button className="info_btn email">
          <EmailIcon />
          <span>Email</span>
        </button>
        <button className="info_btn linkedin">
          <LinkedInIcon />
          <span>Linkedin</span>
        </button>
      </div>
    </div>
  );
};

export default Info;
