import React from "react";
import { ButtonStyle } from "../styles/GlobalStyle";
import { contentData } from "../data/ContentData";

export default function Button() {
  return (
    <ButtonStyle>
      <a href={contentData.link} target="_blank" rel="noreferrer noopener">
        Login
      </a>
    </ButtonStyle>
  );
}
