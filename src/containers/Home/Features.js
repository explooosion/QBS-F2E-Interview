import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

const Main = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    width: calc(100% / 3);

    > h3 {
      margin: .5rem 0;
      padding: 0;
      text-align: center;
      color: ${p => p.theme.black};
    }

    > p {
      margin: 0;
      max-width: 280px;
      text-align: center;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenSm}) {
    > div > img {
      width: 100%;
    }
  }
`;

function Features() {

  const features = [
    { image: './assets/image-53-4.png', title: 'Trusted Wine Delivery Service', descript: 'Deliver Wines with Our New Temperature Controlled Truck' },
    { image: './assets/image-54-4.png', title: 'Incredible Value Premium Wines', descript: 'Work with Producers and Negociants to Bring You Best Value Wines' },
    { image: './assets/image-55.png', title: 'Free Delivery', descript: 'Spend <b>HK$1,800</b> to enjoy free delivery to a single location in Hong Kong Island, Kowloon or New Territories' },
  ]

  const renderFeatures = () => {
    return features.map(({ image, title, descript }, index) => (
      <div key={`feature-${index}`}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{ReactHtmlParser(descript)}</p>
      </div>
    ));
  }

  return (
    <Main>
      {renderFeatures()}
    </Main>
  );
}

export default Features;
