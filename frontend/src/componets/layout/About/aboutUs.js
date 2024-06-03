import React from "react";
import "./aboutUs.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import fav from "../About/favicon.ico"
import MetaData from "../Header/MetaData";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/inventoo.in";
  };
  return (
    <>
    <MetaData title="About-Us"/>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width:"10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={fav}
              alt="Founder"
            />
             
            <Typography>Inventoo</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            At INVENTOO, we specialize in build unique product, personalized gifts that celebrate special moments. With attention to detail and creativity, we bring your ideas to life, making every occasion memorable.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCXzdbVTWB4Ppoe-GBEqi93w"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/inventoo.in" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;