
import React from "react";
import "./contactUs.css";
import "../About/aboutUs.css"
import MetaData from "../Header/MetaData";
import { Button, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <>
    <MetaData title="Contact-Us"/>
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
      <Typography component="h1">Contact Us</Typography>
      <div>
      <div className="contactContainer">
      <a className="mailBtn" href="mailto:inventoogifts@gmail.com">
        <Button>Contact by Email: inventoogifts@gmail.com</Button>
      </a>
      </div>
      </div>
        <div>

          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact Me</Typography>
           

            <a href="https://instagram.com/inventoo.in" target="blank">
              <span>Message Through Instagram -inventoo.in</span>
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://wa.me/918085760192" target="blank">
              <span>Chat With WhatsApp - +91 80857-60192</span>
              <WhatsAppIcon className="whatsappIcon"/>
            </a>
            
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Contact;
