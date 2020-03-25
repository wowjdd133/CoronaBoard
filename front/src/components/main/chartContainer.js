import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  width: 100%;
`

const chartContainer = (props) => {
  return (
    <ChartContainer>
      {props.children}
    </ChartContainer>
  );
};

export default chartContainer;