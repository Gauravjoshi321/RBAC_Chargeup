import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const data = [
  {
    "Month": "Jan",
    "₹": 400,
    "CO2": 3500,
  },
  {
    "Month": "Feb",
    "₹": 800,
    "CO2": 3000,
  },
  {
    "Month": "Mar",
    "₹": 2000,
    "CO2": 2900,
  },
  {
    "Month": "Apr",
    "₹": 1900,
    "CO2": 2500,
  },
  {
    "Month": "May",
    "₹": 1690,
    "CO2": 2000,
  },
  {
    "Month": "Jun",
    "₹": 2390,
    "CO2": 1500,
  },
  {
    "Month": "Jul",
    "₹": 3490,
    "CO2": 300,
  }
]

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 1100px;
  /* background-color: rebeccapurple; */
  margin-right: auto;
  margin-left: auto;
  padding: 60px;
  box-shadow: 0 0 2px rgba(37, 37, 37, 0.5);
`;

const Heading = styled.h3`
  font-size: xx-large;
  font-weight: 700;
  color: #2b2b2b;
`

export default function Graph() {

  return (
    <GraphContainer>
      <Heading>Earning and CO2 Reduction</Heading>
      <AreaChart width={800} height={300} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="₹" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="CO2" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </GraphContainer>
  )
}