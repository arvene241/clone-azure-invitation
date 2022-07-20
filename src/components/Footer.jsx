import React from "react";
import { FooterStyle, LogoLink } from "../styles/GlobalStyle";
import footericon from "../assets/footer-iconpng.png";
import { contentData } from "../data/ContentData";

export default function Footer() {
  return (
    <FooterStyle>
      <p class="m-10">
        <a href="">Unsubscribe</a> | <a href="">Privacy Statement</a>
      </p>
      <p>
        PAASCU <br />
        Unit 107 The Tower at Emerald Square, <br />
        J.P. Rizal corner P. Tuazon Streets, Quezon City 1109
      </p>
      <br />
      <LogoLink href={contentData.homepage_link}>
        <img src={contentData.logo} alt="logo" /> PAASCU
      </LogoLink>
    </FooterStyle>
  );
}
