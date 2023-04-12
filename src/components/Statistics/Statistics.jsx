import React from "react";
import { Radar, RadarChart, PolarGrid,Tooltip, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    
const data = [
    {
      subject: "Assignmnent-1",
      A: 48,
      B:50,
      fullMark: 60
    },
    {
      subject: "Assignmnent-2",
      A: 48,
      B:50,
      fullMark: 60
    },
    {
      subject: "Assignmnent-3",
      A: 28,
      B:30,
      fullMark: 60
    },
    {
      subject: "Assignmnent-4",
      A: 60,
      B:60,
      fullMark: 60
    },
    {
      subject: "Assignmnent-5",
      A: 52,
      B:60,
      fullMark: 60
    },
    {
      subject: "Assignmnent-6",
      A: 60,
      B:60,
      fullMark: 60
    },
    {
      subject: "Assignmnent-7",
      A: 60,
      B:60,
      fullMark: 60
    },
    {
      subject: "Assignmnent-8",
      A: 60,
      B:60,
      fullMark: 60
    }
  ];

  
    return (
      <div>
        <h1 className="text-5xl font-semibold my-20 text-center">Assignment Marks</h1>
        <RadarChart cx={700} cy={250} outerRadius={150} width={1000} height={600} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Tooltip></Tooltip>
      <PolarRadiusAxis angle={30} domain={[0, 60]} />
      <Radar name="Tasnim Alam" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Out of" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
      </div>
    );
  }

export default Statistics;