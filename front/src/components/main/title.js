import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding-top: 15px;
  padding-bottom: 12px;
  font-size: 2.5rem;
  color: #ffffff;
`

const title = () => {
  return (
    <Title>코로나19 실시간 상황판</Title>
  );
};

export default title;

