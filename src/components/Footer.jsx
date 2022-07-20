import React from "react";
import { FooterStyle } from "../styles/GlobalStyle";
import footericon from '../assets/footer-iconpng.png'

export default function Footer() {
  return (
    <FooterStyle>
      <p class="m-10">
        <a href="">Unsubscribe</a> | <a href="">Privacy Statement</a>
      </p>
      <p>
        Microsoft Asia-Pacific HQ <br />
        Frasers Tower, 182 Cecil Street, #13-01 <br />
        069547, Singapore​​​​
      </p>
      <br />
      <a href="https://www.microsoft.com/en-ph/">
        <img src={footericon} alt="footer-icon"/>
      </a>
    </FooterStyle>
  );
}
