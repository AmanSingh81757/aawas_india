"use client"

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


type dataType = {
    data: {id: number, value: number, label: string}[]
}


export default function BasicPie({data} : dataType) {
  return (
    <PieChart
      colors={['red', 'blue', 'green']}
      series={[
        {
            data: data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            cx: 95,
            cy: 150,
        }]
    }
      width={400}
      height={400}
    />
  );
}