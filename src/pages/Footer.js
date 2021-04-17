import React from "react";
import poster from "../assets/img/Poster_frame_color.png";

import { ReactComponent as Logo } from "../assets/img/tower-logo.svg";
import Index from "../components/SocialIcons";
import Buttons from "../components/Buttons";

export default function Footer() {
  return (
    <footer className="footer-container">
      <Logo className="logo" width="177" />

      <div className="ft-img-container">
        <img
          style={{ marginBottom: 46 }}
          src={poster}
          alt=""
          width={350}
          height={425}
        />
        <Buttons />
      </div>
      <Index color="#3ABDE7" />
    </footer>
  );
}
