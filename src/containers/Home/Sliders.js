import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba, darken, transitions } from 'polished';
import { IoIosArrowBack, IoIosArrowForward, IoIosHeart } from 'react-icons/io';

import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';

import NumberPanel from '../../components/NumberPanel';

const Main = styled.section`
  padding: 2rem 1rem;
  width: 100%;

  h1 {
    margin: 0 0 .5rem 2rem;
    font-size: 4rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: normal;
  }

  svg.arrow {
    position: absolute;
    top: -15%;
    font-size: 2.8rem;
    color: ${p => p.theme.black};
    border: 1px solid ${p => p.theme.grape};
    z-index: 1;
    cursor: pointer;

    &:active {
      opacity: .8;
    }

    &[data-type='prev'] {
      right: 5.6%;
    }

    &[data-type='next'] {
      right: 1.5%;
    }
  }
`;

const Wrapper = styled.div`
  height: 490px;
  outline: none;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 0;
  width: 270px;
  height: 470px;
  outline: none;
  box-shadow: 0 2px 5px 2px ${p => p.theme.gray};
  ${transitions('box-shadow .2s')};

  &:hover {
    box-shadow: 0 2px 5px ${p => p.theme.gray};
  }

  .body {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    width: inherit;
    height: 100%;
    color: ${p => p.theme.black};

    &:hover .detail {
      opacity: 1;
    }

    .detail {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: inherit;
      height: inherit;
      color: ${p => p.theme.white};
      background-color: ${p => rgba(p.theme.lightGrape, 0.9)};
      opacity: 0;
      z-index: 1;
      ${transitions('opacity .2s ease')};

      &::before {
        content: '';
        position: absolute;
        top: 4%;
        left: 0;
        width: inherit;
        height: 92%;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 6%;
        width: 88%;
        height: inherit;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }

      > div {
        margin-bottom: .5rem;
        width: inherit;
      }

      span {
        display: inline-block;
        margin-right: .5rem;
        width: 50%;
        text-align: right;
      }
    }

    > img {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: auto;
      height: 270px;
      z-index: -1;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: inherit;
    height: 80px;
    background-color: ${p => p.theme.lightGrape};

    > button {
      width: 140px;
      height: 30px;
      font-size: 1rem;
      color: ${p => p.theme.white};
      background-color: ${p => p.theme.grape};
      border: 0;
      border-radius: .75rem;
      outline: none;
      cursor: pointer;

      &:not(:disabled):active {
        background-color: ${p => darken(.05, p.theme.grape)};
      }

      &:disabled {
        color: ${p => p.theme.gray};
        background-color: ${p => p.theme.lightGray};
        cursor: default;
      }
    }
  }
`;

const Sale = styled.div`
  position: absolute;
  top: -5px;;
  left: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 35px;
  background-color: ${p => p.theme.red};
  z-index: 2;

  &::before {
    content: 'SALE';
    font-size: 1.2rem;
    color: ${p => p.theme.white};
  }
`;

const Heart = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .25rem;
  border: 1px solid ${p => p.theme.lightGrape};
  border-radius: 100%;

  > svg {
    font-size: 1.5rem;
    color: ${p => p.theme.lightGrape};
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  width: 72%;
  height: inherit;
`;

const BlockName = styled.div`
  height: 55%;
  font-size: 1.3rem;
  font-family: 'Times New Roman', Times, serif;
`;

const BlockScores = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > div {
    margin-right: .25rem;
    width: 46px;
    text-align: center;

    > span {
      display: block;
      padding: .25rem 0;
      width: inherit;
      font-size: 14px;
      font-weight: bold;
      border: 1px solid ${p => p.theme.coffee};

      &:first-child {
        color: ${p => p.theme.white};
        background-color: ${p => p.theme.coffee};
      }

      &:last-child {
        color: ${p => p.theme.coffee};
      }
    }
  }
`;

const BlockStock = styled.div`
  position: absolute;
  bottom: 22%;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${p => p.theme.red};
  visibility: hidden;

  &.empty {
    visibility: initial;
  }
`;

const BlockPriceOnSale = styled.div`
  position: absolute;
  bottom: 9%;
  font-size: 1.7rem;
  font-weight: bold;
  color: ${p => p.theme.red};

  ~ div {
    text-decoration-line: line-through;
  }
`;

const BlockPrice = styled.div`
  position: absolute;
  bottom: 3%;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${p => p.theme.coffee};
`;

function PrevArrow(props) {
  const { onClick } = props;
  return <IoIosArrowBack className="arrow" data-type="prev" onClick={onClick} />
}

function NextArrow(props) {
  const { onClick } = props;
  return <IoIosArrowForward className="arrow" data-type="next" onClick={onClick} />
}

function Sliders(props) {
  const { title, datas, options } = props;

  const defaultOptions = {
    autoplay: false,
    arrows: true,
    dots: false,
    draggable: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    ...options,
  };

  const renderTopPicksSliders = () => {
    return datas.map((slide, index) => {
      const { id, name, vintage, price, price_onsale, quantity, thumbnail, scores, country, region, size } = slide;
      return (
        <Wrapper key={`toppicks-${index}`}>
          <Slide>
            <div className="body">
              {price_onsale > 0 ? <Sale /> : null}
              <Heart><IoIosHeart /></Heart>
              <img src={thumbnail} alt="" />

              <div className="detail">
                <div><span>Vintage:</span><b>{vintage}</b></div>
                <div><span>Country:</span><b>{country}</b></div>
                <div><span>Region:</span><b>{region}</b></div>
                <div><span>Size:</span><b>{size.value}{size.unit}</b></div>
              </div>

              <Block>
                <BlockName>{id}-{name}<br />{vintage}</BlockName>
                <BlockScores>
                  <div><span>AM</span><span>{scores.am}</span></div>
                  <div><span>WS</span><span>{scores.ws}</span></div>
                  <div><span>WA</span><span>{scores.wa}</span></div>
                </BlockScores>
                <BlockStock className={quantity ? '' : 'empty'}>OUT OF STOCK</BlockStock>
                {price_onsale > 0 ? <BlockPriceOnSale>HK${price_onsale.toFixed(2)}</BlockPriceOnSale> : null}
                <BlockPrice>HK${price.toFixed(2)}</BlockPrice>
              </Block>
            </div>
            <div className="footer">
              <NumberPanel max={quantity} />
              <button type="button" disabled={!quantity}>Add to cart</button>
            </div>
          </Slide>
        </Wrapper>
      )
    });
  }

  return (
    <Main>
      <h1>{title}</h1>
      <ReactSlick {...defaultOptions}>
        {renderTopPicksSliders()}
      </ReactSlick>
    </Main>
  );
}

Sliders.defaultProps = {
  title: '',
  datas: [],
  options: {},
}

Sliders.propTypes = {
  title: PropTypes.string,
  datas: PropTypes.array,
  options: PropTypes.object,
}

export default Sliders;
