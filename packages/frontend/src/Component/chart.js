import { Stack, Typography } from '@mui/material';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
    Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
    BarChart, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart,
    RadialBarChart, RadialBar, Treemap
} from 'recharts';


export default function Charts({ data = [], dataKeys = [], filters = [], showLegend = true, yTickFormatter = (e) => e }) {
    return (
        <div className="line-chart-wrapper" style={{ float: 'left', width: '100%', height: '200px' }}>
          
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 0, right: 50, left: 0, bottom: 30 }}
                >
               
                    <XAxis dataKey="xValue" fontSize={13} fontWeight={'500'} />
                    <YAxis fontSize={8} fontWeight={'500'} tickFormatter={yTickFormatter} />
               
                    {dataKeys.map((d) => {
                        return (
                            <Line {...d} />
                        )
                    })}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}