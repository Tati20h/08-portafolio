import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const pData = [4, 4.2, 4.5, 3.5, 3.5, 4.2, 3];
const xLabels = [
  'React',
  'JavaScript',
  'HTML,CSS',
  'Node.js',
  'Express.js',
  'Git',
  'SQL',
];

export default function Barras() {
  return (
    <BarChart
      width={650}
      height={400}
      series={[
        { data: pData, label: 'Level', id: 'pvId', color: '#F4D03F' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
