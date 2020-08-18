import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import ReactHtmlParser from 'react-html-parser';

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.75rem 0;

  > div {
    display: flex;
    align-items: flex-end;
    margin: 0 .75rem;
    width: 250px;
    height: 250px;
    text-align: center;
    background-repeat: no-repeat;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      width: inherit;
      height: 60px;
      color: ${p => p.theme.white};
      background-color: ${p => rgba(p.theme.coffee, .8)};
    }
  }
`;

function Features() {

  const heightLights = [
    { image: './assets/heightlight-desktop-1.png', descript: 'Lorem Ipsum <br/> is simply dummy text' },
    { image: './assets/heightlight-desktop-2.png', descript: 'Lorem Ipsum <br/> is simply dummy text' },
    { image: './assets/heightlight-desktop-3.png', descript: 'Lorem Ipsum <br/> is simply dummy text' },
    { image: './assets/heightlight-desktop-4.png', descript: 'Lorem Ipsum <br/> is simply dummy text' },
  ]

  const renderHeightLights = () => {
    return heightLights.map(({ image, descript }, index) => (
      <div key={`heightlight-${index}`} style={{ backgroundImage: `url(${image})` }}>
        <span>{ReactHtmlParser(descript)}</span>
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
