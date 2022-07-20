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
import logo from "../assets/logo.png";
import banner from "../assets/azure-email-hero.png";
import Button from "./Button";
import Footer from "./Footer";

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
        <LogoLink href="https://azure.microsoft.com/">
          <img src={logo} alt="logo" />
        </LogoLink>
      </Container>
      <Banner>
        <p>
          Microsoft Azure Virtual Training Day: <br /> Data Fundamentals
        </p>
        <img src={banner} alt="banner" />
      </Banner>
      <Container>
        <Content>
          <p>
            Learn the fundamentals of core database concepts in a cloud
            environment at{" "}
            <a href="https://mktoevents.com/Microsoft+Event/351998/157-GQE-382?mkt_tok=MTU3LUdRRS0zODIAAAGFmW2g6jmNR1fBjdQxgvNL0UrdhmOhxImLKaavBDaxBwC68t2yic0JvXzFeWABHFtdBcqekDTOSbRh4U9DMT3kRrjNP2OINqNtXfYirPmoH26s-zCQAiiX8OoN">
              {" "}
              Microsoft Azure Virtual Training Day: Data Fundamentals.
            </a>{" "}
            Join us at this free virtual event to build your foundational
            knowledge of cloud data services in Azure. You’ll explore relational
            and nonrelational data offerings, including key capabilities and
            provisioning. You’ll also learn about big data and modern data
            warehouse analytics solutions in Azure.
          </p>
          <p>
            After completing this training, you’ll be eligible to take the{" "}
            <a href="https://emails.microsoft.com/MTU3LUdRRS0zODIAAAGFmW2g6gITr5Tbs1xd-6p3jucYcveJi0zkAuVNqma9UOXOkxcZlGNkQwnO-e0rF2Ovelv51ro=">
              {" "}
              Microsoft Azure Data Fundamentals certification exam
            </a>{" "}
            at no cost.
          </p>
          <p>You will have the opportunity to:</p>
          <ul>
            <li>
              Learn the roles, tasks and responsibilities involved in managing
              data in a cloud environment.
            </li>
            <li>
              Gain basic skills for working with relational and non-relational
              cloud data services in Azure.
            </li>
            <li>
              Explore processing options for building data analytics solutions,
              including Azure Synapse Analytics, Azure Databricks and Azure
              HDInsight.
            </li>
          </ul>
          <p>
            Join us at an upcoming virtual event: <br />
            10 Aug 2022 10:00 AM - 1:30 PM (GMT+08:00) Singapore <br />
            11 Aug 2022 10:00 AM - 1:15 PM (GMT+08:00) Singapore <br /> <br />
            Delivery Language: English <br />
            Closed Captioning Language(s): English
          </p>
        </Content>
        <Center>
          <Button />
          <p>
            Didn’t see a date that works for you?{" "}
            <a href="https://emails.microsoft.com/MTU3LUdRRS0zODIAAAGFmW2g6g5DYIKIfcJB6nR_7WnWbQHs67ScxpRD897WtrGDlZ6Rr6XA-tj7L9LPNIqt0svi-m8=">
              Explore more upcoming events.
            </a>
          </p>
        </Center>
      </Container>
      <Footer />
    </Azure>
  );
}
