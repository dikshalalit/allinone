import React from "react";
import {
  LineChart,
  //   ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const pdata = [
  {
    name: "Monday",
    Booking: 140,
    Earning: 240,
  },
  {
    name: "Tuesday",
    Booking: 230,
    Earning: 339,
  },
  {
    name: "Wednesday",
    Booking: 400,
    Earning: 198,
  },
  {
    name: "Thursday",
    Booking: 278,
    Earning: 90,
  },
  {
    name: "Friday",
    Booking: 189,
    Earning: 180,
  },
  {
    name: "Saturday",
    Booking: 239,
    Earning: 380,
  },
  {
    name: "Sunday",
    Booking: 349,
    Earning: 430,
  },
];

export default function DashBoard() {
  return (
    <div className="chart-design">
      <LineChart
        width={1200}
        height={400}
        data={pdata}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className="linechartsize"
      >
        <CartesianGrid stroke="0" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /*contentStyle={{ backgroundColor: "#39aeed" }}*/ />
        <Legend className="liji" />
        <Line type="monotone" dataKey="Booking" stroke="#0EC01B" />
        <Line type="monotone" dataKey="Earning" stroke="#FFA500" />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}
