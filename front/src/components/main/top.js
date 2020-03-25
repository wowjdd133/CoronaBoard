import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
  background-color: black;
  position: absolute;
  height: 300px;
  width: 100%;
  z-index: -99;
`

const top = () => {
  return (
    <Top />
  );
};

export default top;