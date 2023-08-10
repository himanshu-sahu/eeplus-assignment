import React from 'react'
import { barGraphData } from '../data/barGraph';
import styled from "styled-components";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, Bar, Cell, BarChart
} from "recharts";


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
const Bargraph = () => {
    const CustomToolTip = ({ payload }) => {
        return (
            <ToolTip>
                <p
                    style={{
                        fontWeight: `600`,
                        backgroundColor: '#d9ed92',
                    }}
                    className='pb-1 pt-1'

                >{`${payload[0]?.payload?.Month}`}</p>
                <div className='mb-2 p-2'>
                    <p className='border-bottom p-1'>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
                    <p className='border-bottom p-1'>{`Average Temperature ( F) : ${payload[0]?.payload["Average Temperature ( F)"]}`}</p>
                    <p className='border-bottom p-1'>{`Avg. Household Consumption (kWh) : ${payload[0]?.payload["Avg. Household Consumption (kWh)"]}`}</p>
                    <p className='border-bottom p-1'>{`Avg. Commercial Consumption (kWh) : ${payload[0]?.payload["Avg. Commercial Consumption (kWh)"]}`}</p>
                    <p className='border-bottom p-1'>{`Avg. Industrial Consumption (kWh) : ${payload[0]?.payload["Avg. Industrial Consumption (kWh)"]}`}</p>
                    <p className='border-bottom p-1'>{`Total Electricity Generation (GWh) : ${payload[0]?.payload["Total Electricity Generation (GWh)"]}`}</p>
                    <p >{`Total Revenue from Electricity Sales (USD) : ${(
                        payload[0]?.payload["Total Revenue from Electricity Sales (USD)"] /
                        1000000
                    ).toFixed(2)}M`}</p>
                </div>
            </ToolTip>
        );
    };


    function sliceMonth(month) {
        return month.slice(0, 3);
    }
    let data = [];
    return (
        <div className='w-75 m-auto' >
            <h1>
                Monthly Energy Consumption (in KWh)
            </h1>
            <h6>*Hover on each section for more details.</h6>
            <ResponsiveContainer aspect={4.0 / 2.0}>
                <BarChart data={barGraphData.d.data}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="Month" />
                    <YAxis />
                    <Tooltip content={<CustomToolTip />} cursor={true} />
                    <Legend />
                    <Bar
                        dataKey="Consumption (kWh)"
                        fill="#82ca9d"
                        barSize={20}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={data[index % data.length]?.color}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer></div>
    )
}

export default Bargraph