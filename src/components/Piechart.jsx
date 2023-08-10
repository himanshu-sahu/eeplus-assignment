import React from "react";
// import { Pie } from 'react-chartjs-2';
import { pieChartData } from "../data/pieData.jsx";
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const COLORS = ["#63ad01d9", "#00c839", "#2889ff", "#ee0000", ];

const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
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

const Piechart = () => {
    const CustomToolTip = ({ payload }) => {
        return (
            <ToolTip>
                <p
                    style={{
                        borderBottom: `${payload[0]?.payload?.color}`,
                    }}
                >{`${payload[0]?.payload?.name}`}</p>
                <p>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
                <p>{`Population (millions) : ${payload[0]?.payload["Population (millions)"]}`}</p>
                <p>{`Renewable Energy % : ${payload[0]?.payload["Renewable Energy %"]}`}</p>
                <p>{`Total Energy Consumption (GWh) : ${payload[0]?.payload["Total Energy Consumption (GWh)"]}`}</p>
                <p>{`Avg. Household Consumption (kWh) : ${payload[0]?.payload["Avg. Household Consumption (kWh)"]}`}</p>
                <p>{`Avg. Commercial Consumption (kWh) : ${payload[0]?.payload["Avg. Commercial Consumption (kWh)"]}`}</p>
                <p>{`Avg. Industrial Consumption (kWh) : ${payload[0]?.payload["Avg. Industrial Consumption (kWh)"]}`}</p>
            </ToolTip>
        );
    }
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                <p>Q1</p>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="d-flex align-items-center flex-column justify-content-center">
            <h1>Quarterly Energy Consumption for the current year across the USA </h1>
            <h6>*Hover on each section for more details.</h6>
            <ResponsiveContainer width="50%" aspect={1}  >
                <PieChart>
                    <Pie
                        dataKey="Consumption (kWh)"
                        isAnimationActive={true}
                        data={pieChartData.d.data}
                        cx="center"
                        cy="center"
                        innerRadius={"0%"}
                        outerRadius={"50%"}
                        fill="#8884d8"
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                        {pieChartData.d.data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomToolTip />} cursor={true} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Piechart