import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

const Main = styled.div`
  position: fixed;
  top: 70px;
  display: none;
  padding: .5rem 0;
  width: 100%;
  text-align: center;
  color: ${p => p.theme.white};
  background-color: ${p => rgba(p.theme.darkGray, 0.9)};
  cursor: pointer;
  z-index: 99;

  &.visited {
    display: none;
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    display: block;
  }
`;

function TopTips(props) {
  const [visited, setVisited] = useState(false);
  const { text } = props;
  return (
    <Main
      className={visited ? 'visited' : ''}
      onClick={() => setVisited(true)}
    >
      {text}
    </Main>
  );
}

TopTips.defaultProps = {
  text: '',
}

TopTips.propTypes = {
  text: PropTypes.string,
}

export default TopTips;
