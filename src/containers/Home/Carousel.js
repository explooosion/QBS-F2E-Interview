import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba, darken, transitions } from 'polished';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';

const Main = styled.section`
  position: absolute;
  top: 0;

  svg.arrow {
    position: absolute;
    top: 50%;
    font-size: 5rem;
    color: ${p => p.theme.white};
    z-index: 1;
    cursor: pointer;

    &:active {
      opacity: .8;
    }

    &[data-type='prev'] {
      left: 20px;
    }

    &[data-type='next'] {
      right: 20px;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    svg.arrow {
      font-size: 3rem;
    }
  }
`;

const Slider = styled(ReactSlick)`
  width: 100vw;
  height: 100vh;

  .slide-wrapper {
    outline: none;
  }

  .slide {
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Form = styled.div`
  position: absolute;
  top: 62%;
  right: 5%;
  color: #fff;

  h1 {
    margin: 0;
    font-size: 3.5rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: normal;
    letter-spacing: 1px;
  }

  h3 {
    margin: 1rem 0 .5rem;
    font-size: 1.5rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: normal;
    letter-spacing: 1px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 45px;
    font-size: 1rem;
    text-decoration: none;
    color: ${p => p.theme.white};
    background-color: ${p => rgba(p.theme.gray, .9)};
    ${transitions('background-color .2s')};

    &:hover {
      background-color: ${p => rgba(darken(0.1, p.theme.gray), .9)};
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    top: 35%;
    right: 0;
    width: 100%;
    text-align: center;

    a {
      margin: 10rem auto 0;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenSm}) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      margin: 0;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenXxs}) {
    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: .75rem;
    }

    a {
      margin-top: 7rem;
    }
  }
`;

function PrevArrow(props) {
  const { onClick } = props;
  return <IoIosArrowBack className="arrow" data-type="prev" onClick={onClick} />
}

function NextArrow(props) {
  const { onClick } = props;
  return <IoIosArrowForward className="arrow" data-type="next" onClick={onClick} />
}

function Carousel() {

  const sliders = [
    './assets/slider-1.png',
    './assets/slider-2.png',
    './assets/slider-3.png',
  ]

  const options = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const renderSliders = () => {
    return sliders.map((slide, index) => (
      <div key={`slide-${index}`}>
        <div className="slide" style={{ backgroundImage: `url(${slide})` }}></div>
      </div>
    ));
  }

  return (
    <Main>
      <Slider {...options}>
        {renderSliders()}
      </Slider>
      <Form>
        <h1>Trusted wine delivery</h1>
        <h3>with temperature controlled wine delivery truck</h3>
        <Link to="/">SEE MORE</Link>
      </Form>
    </Main>
  );
}

export default Carousel;
