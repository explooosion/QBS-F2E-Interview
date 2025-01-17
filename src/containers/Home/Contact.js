import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  padding: 1rem 4rem;
  width: 100%;
  background-color: ${p => p.theme.rice};

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

const LAside = styled(Aside)`
  width: 325px;

  img {
    width: 150px;
    height: auto;
  }

  p {
    line-height: 1.4rem;
  }
`;

const RAside = styled(Aside)`
  width: 325px;

  nav {
    margin-top: 1.5rem;

    a {
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      color: ${p => p.theme.black};

      &:not(:last-child)::after {
        content: '|';
        padding: 0 .5rem;
      }
    }
  }

  .email {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    label {
      font-size: .85rem;
    }

    input {
      padding: .5rem;
    }

    button {
      margin-top: .5rem;
      width: 100px;
      height: 35px;
      color: ${p => p.theme.white};
      background-color: ${p => p.theme.lightGrape};
      border: 0;
      cursor: pointer;
    }
  }

  .links {
    margin-top: 2rem;
    text-align: right;

    svg {
      font-size: 3.5rem;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    .email {
      width: 100%;

      button {
        margin: .5rem auto 0;
      }
    }

    .links svg {
      font-size: 2.5rem;
    }
  }
`;

function Contact() {
  return (
    <Main>
      <LAside>
        <img src="./assets/ponti_wine_cellars-logo BLACK.png" alt="" />
        <p>Ponti Wine Cellars is an online wine shpo in Hong Kong. We offer a comprehensive range of top quality whine from all over the world such as USA, Italy, France, Spain, Argentina, Chile and etc.</p>
      </LAside>

      <RAside>
        <nav>
          <Link to="/">ABOUT US</Link>
          <Link to="/">SHOP</Link>
          <Link to="/">WINCE CLUB BENEFITOUR STORES</Link>
          <Link to="/">CONTACT US</Link>
          <Link to="/">FAQ SITE MAP</Link>
        </nav>

        <div className="email">
          <label>NEWSLETTER</label>
          <input type="text" placeholder="Email Address" />
          <button type="button" >SUBSCRIBE</button>
        </div>

        <div className="links">
          <FaFacebookSquare />
          <FaInstagram />
        </div>
      </RAside>
    </Main>
  );
}

export default Contact;
