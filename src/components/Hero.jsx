import React from "react";
import {
  Azure,
  Banner,
  Center,
  Container,
  Content,
  LogoLink,
  Nav,
} from "../styles/GlobalStyle";
import logo from "../assets/paascu-logo.png";
import banner from "../assets/azure-email-hero.png";
import Button from "./Button";
import Footer from "./Footer";
import { contentData } from "../data/ContentData";

export default function Hero() {
  return (
    <Azure>
      <Nav>
        <p>
          Having trouble viewing this email? |{" "}
          <a href="https://info.microsoft.com/index.php/email/emailWebview">
            View as web page
          </a>
        </p>
      </Nav>
      <Container>
        <LogoLink href={contentData.homepage_link}>
          <img src={contentData.logo} alt="logo" />  PAASCU
        </LogoLink>
      </Container>
      <Banner>
        <p>{contentData.title}</p>
        <img src={banner} alt="banner" />
      </Banner>
      <Container>
        <Content>
          <p>{contentData.content}</p>
          <p>{contentData.content1}</p>
          <p>
            Username: <strong>{contentData.username}</strong> <br />
            Password: <strong>{contentData.password}</strong> <br />
          </p>
        </Content>
        <Center>
          <Button />
          <p>
            Did you have a problem signin in to your account?{" "}
            <a
              href={contentData.support_link}
              target="_blank"
              rel="noreferrer noopener"
            >
              Support
            </a>
          </p>
        </Center>
      </Container>
      <Footer />
    </Azure>
  );
}
