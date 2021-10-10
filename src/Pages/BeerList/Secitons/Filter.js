import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from 'antd';
import { HiFilter } from 'react-icons/hi';
const Filter = ({ abvRange, setAbvRange }) => {
  const [value, setValue] = useState([abvRange.start, abvRange.end]);
  const changeHandler = e => {
    setValue(e);
  };
  const clickHandler = () => {
    const [start, end] = value;
    setAbvRange({ start, end });
  };

  return (
    <Wrapper>
      <StyledSlider
        range
        marks={marks}
        min={0}
        max={20}
        onChange={changeHandler}
        value={value}
      />
      <IconButton type="button" onClick={clickHandler}>
        <HiFilter />
      </IconButton>
    </Wrapper>
  );
};
const marks = {
  0: '0%',
  20: '20%',
};
const Wrapper = styled.div({
  width: '60%',
  padding: '1em',
  display: 'flex',
});
const StyledSlider = styled(Slider)(({ theme }) => ({
  width: '90%',
  marginRight: '1.5em',
  '.ant-slider-track': {
    backgroundColor: theme.color.primary,
  },
  '.ant-slider-handle': {
    backgroundColor: theme.color.secondaryBgColor,
    borderColor: theme.color.primary,
  },
  '.ant-slider-mark-text, .ant-slider-mark-text-active': {
    color: theme.color.textColor,
  },
}));
const IconButton = styled.button(({ theme }) => ({
  border: 'none',
  backgroundColor: 'rgba(0,0,0,0)',
  color: theme.color.textColor,
  width: '3em',
  height: '3em',
  borderRadius: '50%',
  padding: 0,
  fontSize: '0.8em',
  '&:hover': {
    color: theme.color.primary,
    backgroundColor: theme.color.normalAlpha,
  },
}));
export default Filter;
