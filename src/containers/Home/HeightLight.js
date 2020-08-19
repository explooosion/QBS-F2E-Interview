import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  > div {
    display: flex;
    align-items: flex-end;
    margin: 0 .75rem;
    width: 300px;
    height: 300px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;

    > span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding: 5px 10px;
      width: 100%;
      height: 60px;
      font-weight: bold;
      color: ${p => p.theme.white};
      background-color: ${p => rgba(p.theme.coffee, .8)};

      p {
        margin: 0;
        width: 100%;
        font-weight: normal;
      }
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenXl}) {
    > div {
      width: 200px;
      height: 200px;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    flex-direction: column;
    width: 100%;

    > div {
      width: 85%;
      height: 250px;

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      > span {
        height: 80px;
      }
    }
  }
`;

function Features() {

  const heightLights = [
    { image: './assets/heightlight-desktop-1.png', title: 'Shop Promotions', descript: 'Checkout the latest offers in shops!' },
    { image: './assets/heightlight-desktop-2.png', title: 'Smart Buys', descript: 'Well-priced, high-quality wines!' },
    { image: './assets/heightlight-desktop-3.png', title: 'Top Rated Wines', descript: 'Wine scores 90 points or higher!' },
    { image: './assets/heightlight-desktop-4.png', title: 'Events', descript: 'What is happening now!' },
  ]

  const renderHeightLights = () => {
    return heightLights.map(({ image, title, descript }, index) => (
      <div key={`heightlight-${index}`} style={{ backgroundImage: `url(${image})` }}>
        <span>{title}<p>{descript}</p></span>
      </div>
    ));
  }

  return (
    <Main>
      {renderHeightLights()}
    </Main>
  );
}

export default Features;
