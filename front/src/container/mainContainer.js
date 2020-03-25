import React, {useState,useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import MainBox from '../components/main/mainBox';
import styled from 'styled-components';
import Top from '../components/main/top';
import Title from '../components/main/title';
import DonutChart from '../components/main/donutChart';
import ChartContainer from '../components/main/chartContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const mainContainer = (props) => {
  const {CoronaStore} = props.stores;

  useEffect(() => {
    CoronaStore.getLoading()
    CoronaStore.getCoronaKoreaConfirm() 
    .then(() => {
    CoronaStore.getCoronaWorldConfirm()
      .then(() => {
        CoronaStore.loadingComplete();
      })
   })
  },[]);

  return (
    <Container>
      <Top/>
      <Title/>
      <MainBox  CoronaStore={CoronaStore}/>
      {
        !CoronaStore.isLoading ?
          <ChartContainer>
            <DonutChart CoronaStore={CoronaStore} data={CoronaStore.coronaKorea} title="한국" />
            <DonutChart CoronaStore={CoronaStore} data={CoronaStore.coronaWorld} title="전세계" />
          </ChartContainer>
        : <p>차트 로딩중</p>
      }
    </Container>
  );
};

export default inject('stores')(observer(mainContainer));