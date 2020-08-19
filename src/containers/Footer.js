import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import visa from 'payment-icons/min/flat/visa.svg';
import master from 'payment-icons/min/flat/mastercard-old.svg';
import unionpay from 'payment-icons/min/single/unionpay.svg';
import alipay from 'payment-icons/min/single/alipay.svg';
import paypal from 'payment-icons/min/flat/paypal.svg';
import verve from 'payment-icons/min/flat/verve.svg';

const Main = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;


  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    text-align: center;
  }
`;

const LAside = styled.aside`
  font-size: 12px;

  p {
    margin: .15rem 0;
  }

  > div {
    display: flex;
    align-items: flex-end;
    margin-top: 1rem;

    span {
      margin-right: 2rem;
    }

    nav {
      font-size: 14px;

      a {
        text-decoration: none;
        color: ${p => p.theme.black};

        &:not(:last-child)::after {
          content: '|';
          padding: 0 .5rem;
        }
      }
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenXl}) {
    > div {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    margin-bottom: 1rem;

    > div {
      display: none;
    }
  }
`;

const RAside = styled.nav`
  display: flex;
  align-items: center;

  img {
    margin-left: .5rem;
    width: 60px;
    height: 38px;

    &.border {
      border: 1px solid ${p => p.theme.black};
      border-radius: .25rem;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenSm}) {
    img {
      width: 40px;
      height: 28px;
    }

  }
`;

function Footer() {

  const payments = [
    { icon: visa, border: false },
    { icon: alipay, border: true },
    { icon: unionpay, border: true },
    { icon: verve, border: false },
    { icon: master, border: false },
    { icon: paypal, border: true },
  ]

  const renderPayments = () => {
    return payments.map(({ icon, border }, index) => (
      <img key={`payment-${index}`} src={icon} className={border ? 'border' : ''} alt="" />
    ))
  }

  return (
    <Main>
      <LAside>
        <p>Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business.</p>
        <p>根據香港法律, 不得在業務過程中, 向未成年人售賣或供應令人最醺的酒類。</p>
        <div>
          <span>@ 2020, Ponti Wine Cellars</span>
          <nav>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Cookies Policy</Link>
          </nav>
        </div>
      </LAside>
      <RAside>
        {renderPayments()}
      </RAside>
    </Main>
  );
}

export default Footer;
