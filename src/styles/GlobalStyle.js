import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/segoe-ui-4');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: #E3E3E3;
    font-size: 15px;
    line-height: 24px;
    color: #464646;
  }

  a {
    text-decoration: none;
  }

`;

export const Azure = styled.main`
  width: 640px;
  max-width: 640px;
  margin: auto;
  margin-bottom: 48px;
`;

export const Nav = styled.div`
  padding: 24px 24px 12px 0px;

  p {
    color: #5e5e5e;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    text-align: right;

    a {
      color: #5e5e5e;
      border-bottom: 1px solid #5e5e5e;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 24px;

  p {
    font-weight: 400;
    line-height: 24px;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  p {
    margin: 15px 0;

    a {
      color: #0078d7;
    }
  }

  ul {
    margin: 15px 0;
    padding-left: 40px;
  }
`;

export const LogoLink = styled.a`
  color: #008102;
  font-weight: bold;

  img {
    width: 25px;
    height: 25px;
    vertical-align: bottom;
  }
`;

export const Banner = styled.div`
  max-width: 640px;
  background-color: #3c3c41;

  img {
    width: 100%;
  }

  p {
    padding: 31px 30px;
    font-weight: 400;
    font-size: 26px;
    color: #ffffff;
    line-height: normal;
  }
`;

export const Center = styled.div`
  margin-top: calc(15px + 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: calc(16px + 14px) 0;
    font-size: 16px;
    color: #222222;

    a {
      text-decoration: underline;
      text-decoration-color: rgb(0, 0, 238);
    }
  }
`;

export const ButtonStyle = styled.button`
  text-transform: uppercase;
  background: #3c3c41;
  padding: 0 24px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  border: 0;
  margin-bottom: 24px;

  a {
    color: #fff;
  }
`;

export const FooterStyle = styled.footer`
  background-color: #f2f2f2;
  padding: 24px;

  .m-10 {
    margin-bottom: 10px;
  }

  p {
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    a {
      color: #5e5e5e;
      border-bottom: 1px solid #5e5e5e;
    }
  }
  
`;

export default GlobalStyle;
