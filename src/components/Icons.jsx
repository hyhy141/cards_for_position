import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Icons = () => {
  return (
    <div className="icons">
      <div className="icons_inner">
        <div className="icon">
          <TwitterIcon />
        </div>
        <div className="icon">
          <FacebookIcon />
        </div>
        <div className="icon">
          <InstagramIcon />
        </div>
        <div className="icon">
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Icons;
