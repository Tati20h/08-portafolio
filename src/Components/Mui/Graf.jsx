import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Graf() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 15, label: 'Adaptability' },
                        { id: 1, value: 15, label: 'Empathy' },
                        { id: 2, value: 15, label: 'Problema Resolution' },
                        { id: 3, value: 15, label: 'Teamwork' },
                        { id: 4, value: 20, label: 'Leadership' },
                        { id: 5, value: 20, label: 'Fellowship' },


                    ],
                    innerRadius: 20,
                    outerRadius: 125,
                    paddingAngle: 4,
                    cornerRadius: 5,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 125,
                    cy: 150,
                },
            ]}
            width={500}
            height={300}
        />
    );
}
