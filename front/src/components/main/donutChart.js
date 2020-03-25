import React from 'react';
import Chart from 'react-google-charts';

const options = {
  title: "한국",
  pieHole: 0.4,
  is3D: false,
  pieSliceTextStyle: {
    color: 'black',
  },
};

const donutChart = (props) => {
  let data = [
    ["검사 결과","명"],
  ];
  
  data = data.concat(props.CoronaStore.changeArray(props.data));
  
  console.log(data);

  options.title = props.title;

  return (
    <Chart
      chartType="PieChart"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default donutChart;