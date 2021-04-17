import React from "react";
import poster from "../assets/img/Poster_frame_color.png";

import { ReactComponent as Logo } from "../assets/img/tower-logo.svg";
import Index from "../components/SocialIcons";
import Buttons from "../components/Buttons";

export default function Footer() {
  return (
    <footer className="footer-container">
      <Logo className="logo" width="177"  />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 60,
          maxWidth: "100%",
        }}
      >
        <img
          style={{ marginBottom: 46 }}
          src={poster}
          alt=""
          width={381}
          height={494}
          className="ft-poster"
        />
        <Buttons />
      </div>
      <Index color="#3ABDE7" />
    </footer>
  );
}
