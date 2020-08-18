import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import HR from '../components/HR';

import Carousel from '../containers/Home/Carousel';
import Features from '../containers/Home/Features';
import HeightLight from '../containers/Home/HeightLight';
import Sliders from '../containers/Home/Sliders';
import Contact from '../containers/Home/Contact';

const Main = styled.div`
  position: relative;
  overflow: hidden;

  /** Carousel */
  padding-top: 100vh;
`;

function Home() {
  const { lists } = useSelector(state => state.products);
  return (
    <Main>
      <Carousel />
      <Features />
      <HR style={{ width: '60%' }} />
      <HeightLight />
      <Sliders title="Ponti’s top picks" datas={lists} />
      <Sliders title="New arrivals..." datas={_.sortBy(lists, ['vintage'])} />
      <Contact />
    </Main>
  )
}

export default Home;
