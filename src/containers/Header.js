import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba } from 'polished';
import { useWindowScroll } from 'react-use';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Main = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  color: ${p => p.theme.white};
  background-color: ${p => rgba(p.theme.darkGray, 0.95)};
  z-index: 999;

  &.minify {
    height: 80px;

    img {
      position: absolute;
      top: 1.2rem;
      left: 2.5rem;
      height: 50px;
    }
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
    width: inherit;

    a {
      padding: 0 .85rem;
      text-decoration: none;
      text-transform: uppercase;
      color: ${p => p.theme.white};

      &:hover {
        ${p => `text-stroke: 1px ${p.theme.white};`};
        ${p => `-webkit-text-stroke: 1px ${p.theme.white};`};
      }
    }
  }
`;

const NavLeft = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;

  span {
    display: block;

    b {
      margin-right: .25rem;
      text-transform: uppercase;
    }
  }

  &.minify {
    display: none;
  }
`;

const NavRight = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  display: flex;
  align-items: center;

  &.minify {
    top: 1.25rem;
  }

  .login-bar {
    a {
      display: inline-block;
      text-decoration: none;
      color: ${p => p.theme.white};

      &:not(:last-child)::after {
        content: '|';
        padding: 0 .5rem;
      }
    }
  }

  .tool-bar {
    margin-left: 1rem;

    a {
      position: relative;
      display: inline-block;
      margin: 0 .5rem;
      text-decoration: none;
      color: ${p => p.theme.white};

      svg {
        font-size: 2.25rem;
      }

      &[data-amount]::before {
        content: attr(data-amount);
        position: absolute;
        top: -2px;
        right: -12px;
        width: 25px;
        height: 25px;
        font-size: 10px;
        text-align: center;
        line-height: 24px;
        background: ${p => p.theme.red};
        border-radius: 100%;
      }
    }
  }
`;

function Header() {

  const { y } = useWindowScroll();

  const navs = [
    { to: '/', name: 'SHOP' },
    { to: '/', name: 'PROMOTIONS' },
    { to: '/', name: 'EVENTS' },
    { to: '/', name: 'ABOUT US' },
    { to: '/', name: 'CONTACT' },
  ]

  const renderNavs = () => {
    return navs.map(({ to, name }, index) =>
      <Link key={`nav-${index}`} to={to}>{name}</Link>
    );
  }

  const mode = (y > 20) ? 'minify' : '';

  return (
    <Main className={mode}>

      <NavLeft className={mode}>
        <span><b>TEL</b>(852) 2739 7678</span>
        <span><b>EMAIL</b>enquiries@pontiwinecellars.com</span>
      </NavLeft>

      <img src="./assets/ponti-wine-cellars-logo-1589532960.jpg.png" alt="" />
      <nav>{renderNavs()}</nav>

      <NavRight className={mode}>
        <div className="login-bar">
          <Link to="/">Login in</Link>
          <Link to="/">Register</Link>
        </div>
        <div className="tool-bar">
          <Link to="/"><AiOutlineSearch /></Link>
          <Link to="/" data-amount="2"><AiOutlineShoppingCart /></Link>
        </div>
      </NavRight>
    </Main >
  );
}

export default Header;
