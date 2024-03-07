import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Graf() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 15, label: 'Adaptabilidad' },
                        { id: 1, value: 15, label: 'Empatia' },
                        { id: 2, value: 15, label: 'Resolución de problemas' },
                        { id: 3, value: 15, label: 'Trabajo en equipo' },
                        { id: 4, value: 20, label: 'Liderazgo' },
                        { id: 5, value: 20, label: 'Compañerismo' },
                        

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
