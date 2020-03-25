import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #E6E6E6;
  max-width:960px;
  width: 100%;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 5px;
`

const TopText = styled.h1`
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 1.7rem;
`

const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BoardWrap = styled.div`
  margin: 10px 15px 10px 15px;
  width: 21%;
`

const BigText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

const AddtionalExplanation = styled.p`
  margin-top: 0px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 400;
`

const mainBox = (props) => {
  const {CoronaStore} = props
  return (
    <Box>
      <TopText>전세계</TopText>
      <Dashboard>
        <BoardWrap>
          <BigText>{CoronaStore.coronaWorld.cases} 명</BigText>
          <p>확진자</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaWorld.recovered} 명</BigText>
          <p>격리해제</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaWorld.deaths} 명</BigText>
          <p>사망</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaWorld.mortality} %</BigText>
          <p>치사율</p>
        </BoardWrap>
      </Dashboard>
      <TopText>대한민국</TopText>
      <Dashboard>
      <BoardWrap>
          <BigText>{CoronaStore.coronaKorea.cases}명</BigText>
          <p>확진자</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaKorea.recovered} 명</BigText>
          <p>격리해제</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaKorea.deaths} 명</BigText>
          <p>사망</p>
        </BoardWrap>
        <BoardWrap>
          <BigText>{CoronaStore.coronaKorea.mortality} %</BigText>
          <p>치사율</p>
        </BoardWrap>
      </Dashboard>
      <AddtionalExplanation>* World: {CoronaStore.coronaWorld.date}</AddtionalExplanation>
      <AddtionalExplanation>* 한국 : {CoronaStore.coronaKorea.date}</AddtionalExplanation>
    </Box>
  );
};

export default mainBox;