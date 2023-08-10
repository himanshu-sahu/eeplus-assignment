import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineGraphData } from "../data/lineGraph.jsx";
import styled from "styled-components";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: fit-content;
  height: fit-content;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;
const Linegraph = () => {
  const CustomToolTip = ({ payload }) => {
    return (
      <ToolTip>
        <p
          style={{
            fontWeight: `600`,
            backgroundColor: '#d9ed92',
          }}
          className='pb-1 pt-1'
        >{`${payload[0]?.payload?.State}`}</p>
        <div className='mb-2 p-2'>
          <p className='border-bottom p-1'>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
          <p className='border-bottom p-1'>{`Population (millions) : ${payload[0]?.payload["Population (millions)"]}`}</p>
          <p className='border-bottom p-1'>{`Median Household Income (USD) : ${payload[0]?.payload["Median Household Income (USD)"]}`}</p>
          <p className='border-bottom p-1'>{`Total CO2 Emissions (metric tons) : ${payload[0]?.payload["Total CO2 Emissions (metric tons)"]}`}</p>
          <p >{`Total Revenue from Electricity Sales (USD) : ${payload[0]?.payload["Total Revenue from Electricity Sales (USD)"]}`}</p>
        </div>
      </ToolTip>
    );
  };

  const tickFormatterY = (value) => {
    return `${value}%`;
  };

  return (
    <div className='d-flex m-auto justify-content-center align-items-center flex-column w-75 '>
      <h1>
        State-wise Energy Consumption (in %)
      </h1>
      <h6>*Hover on each section for more details.</h6>
      <ResponsiveContainer aspect={4.0 / 2.0}>
        <LineChart data={lineGraphData.d.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Abr" />
          <YAxis tickFormatter={tickFormatterY} />
          <Tooltip content={<CustomToolTip />} cursor={true} />
          <Legend />
          <Line type="monotone" dataKey="Renewable Energy %" activeDot={{ r: 8 }} strokeWidth={2} strokeDasharray="5 5" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Linegraph