import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba, transitions } from 'polished';
import { useWindowScroll, useWindowSize } from 'react-use';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

import Screen from '../utils/Screen';

const Main = styled.nav`
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

    > img {
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

      &:hover,
      &:focus {
        ${p => `text-stroke: 1px ${p.theme.white};`};
        ${p => `-webkit-text-stroke: 1px ${p.theme.white};`};
      }
    }

    .mask {
      display: none;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    flex-direction: row;
    height: 70px;
    background-color: ${p => p.theme.lightGray};

    > img {
      height: 60px;
    }

    > nav {
      position: absolute;
      top: 0;
      left: -100%;
      margin-top: 0;
      width: 100vw;
      height: 100vh;
      ${transitions('left .5s ease-in-out')};

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: transparent;
        box-shadow: none;
      }

      > div {
        position: absolute;
        top: 70px;
        left: 0;
        overflow-y: scroll;
        margin-top: 0;
        padding: 1.5rem;
        width: 80%;
        height: calc(100vh - 70px);
        background-color: #fff;
        box-shadow: 0 2px 10px ${p => p.theme.black};

        &::-webkit-scrollbar {
          width: 6px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${p => p.theme.gray};
        }
      }

      &.toggled {
        left: 0;
      }

      a {
        display: block;
        padding: .5rem 0;
        color: ${p => p.theme.black};

        &:hover,
        &:focus {
          ${`text-stroke: 0;`};
          ${`-webkit-text-stroke: 0;`};
        }
      }
    }
  }
`;

const NavLeft = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    display: none;
  }

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

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    top: 1rem;
    right: 1.5rem;

    .login-bar {
      display: none;
    }

    .tool-bar a[data-amount]::before {
      color: ${p => p.theme.white};
    }

    .tool-bar .tool-search {
      display: none;
    }

    .tool-bar .tool-cart {
      color: ${p => p.theme.black};
    }
  }
`;

const NavToggler = styled(GiHamburgerMenu)`
  position: absolute;
  top: .85rem;
  left: 1.5rem;
  display: block;
  padding: .5rem;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  color: ${p => p.theme.white};
  background-color: #000;
  border-radius: 100%;
  outline: none;
  cursor: pointer;

  &:focus ~ nav {
    display: block;
  }

  @media only screen and (min-width: ${p => p.theme.screenLg}) {
    display: none;
  }
`;

const NavClosed = styled(GrFormClose)`
  position: absolute;
  top: .5rem;
  right: .5rem;
  font-size: 2.25rem;
  color: ${p => p.theme.black};
  cursor: pointer;

  @media only screen and (min-width: ${p => p.theme.screenLg}) {
    display: none;
  }
`;

const Line = styled.hr`
  width: 100%;
  border: 1.5px solid ${p => p.theme.lightGray};
`;

function Header() {

  const [navToggle, setNavToggle] = useState(false);

  const { y } = useWindowScroll();
  const { width } = useWindowSize();

  const navs = width > Screen.lg ?
    [
      { to: '/', name: 'SHOP' },
      { to: '/', name: 'PROMOTIONS' },
      { to: '/', name: 'EVENTS' },
      { to: '/', name: 'ABOUT US' },
      { to: '/', name: 'CONTACT' },
    ]
    :
    [
      { to: '/', name: 'LOG IN / REGISTER' },
      { to: '/', name: 'SHOP' },
      { to: '/', name: 'PROMOTIONS' },
      { to: '/', name: 'EVENTS' },
      { to: '/', name: 'ABOUT US' },
      { to: '/', name: 'CONTACT' },
      { to: '/', name: '-' },
      { to: '/', name: 'PRIVACY & POLICY' },
      { to: '/', name: 'TERMS OF USE' },
      { to: '/', name: 'COOKIES POLICY' },
      { to: '/', name: 'FAQ' },
      { to: '/', name: 'SEARCH' },
    ];

  const renderNavs = () => {
    return navs.map(({ to, name }, index) =>
      name === '-'
        ? <Line key={`nav-${index}`} />
        : <Link key={`nav-${index}`} to={to}>{name}</Link>
    );
  }

  const mode = (y > 20 && width > Screen.lg) ? 'minify' : '';

  const logo = width > Screen.lg
    ? './assets/ponti-wine-cellars-logo-1589532960.jpg.png'
    : './assets/ponti_wine_cellars-logo BLACK.png';

  return (
    <Main className={mode}>

      <NavLeft className={mode}>
        <span><b>TEL</b>(852) 2739 7678</span>
        <span><b>EMAIL</b>enquiries@pontiwinecellars.com</span>
      </NavLeft>

      <NavToggler onClick={() => setNavToggle(!navToggle)} />

      <img src={logo} alt="" />

      <nav
        className={navToggle ? 'toggled' : ''}
      >
        {/* 用全螢幕遮罩做為選單開關 */}
        <div className="mask" onClick={() => setNavToggle(false)}></div>
        <div>
          <NavClosed onClick={() => setNavToggle(false)} />
          {renderNavs()}
        </div>
      </nav>

      <NavRight className={mode}>
        <div className="login-bar">
          <Link to="/">Login in</Link>
          <Link to="/">Register</Link>
        </div>
        <div className="tool-bar">
          <Link className="tool-search" to="/"><AiOutlineSearch /></Link>
          <Link className="tool-cart" to="/" data-amount="2"><AiOutlineShoppingCart /></Link>
        </div>
      </NavRight>
    </Main>
  );
}

export default Header;
