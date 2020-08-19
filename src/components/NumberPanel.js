import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import _ from 'lodash';

const Main = styled.div`
  position: relative;

  > input {
    padding: 0 20px;
    width: 75px;
    height: 25px;
    text-align: center;
    border: 0;
    border-radius: 0;
    outline: none;
  }

  > button {
    position: absolute;
    top: 2px;
    width: 20px;
    height: 22px;
    color: ${p => p.theme.white};
    background-color: ${p => p.theme.lightGrape};
    border: 0;
    outline: none;
    cursor: pointer;

    &:active {
      background-color: ${p => darken(.05, p.theme.lightGrape)};
    }

    &::before {
      content: attr(data-text);
      position: absolute;
      top: 3px;
      right: 0;
      left: 0;
    }

    &[data-text='-'] {
      left: 1px;
    }

    &[data-text='+'] {
      right: 1px;
    }
  }
`;

function NumberPanel(props) {
  const { max } = props;
  const [value, setValue] = useState(0);

  const onChangeCar = number => {
    if (!_.isNaN(number)) {
      if (number < 0) setValue(0);
      else if (number > max) setValue(max);
      else setValue(number);
    }
  }

  return (
    <Main>
      <button data-text="-" type="button" onClick={() => onChangeCar(value - 1)}></button>
      <input type="text" value={value} onChange={e => onChangeCar(Number(e.target.value))} />
      <button data-text="+" type="button" onClick={() => onChangeCar(value + 1)}></button>
    </Main>
  );
}

NumberPanel.propTypes = {
  max: PropTypes.number.isRequired,
}

export default NumberPanel;
