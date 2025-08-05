

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DottedAreaChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'straight',
      width: 2,
      dashArray: [5], // dotted line
      colors: ['#25CD25'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        colorStops: [
          {
            offset: 0,
            color: '#25CD25',
            opacity: 0.8,
          },
          {
            offset: 100,
            color: '#ffffff',
            opacity: 0.6,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
        show: true,
        borderColor: '#e0e0e0',
        yaxis: {
          lines: {
            show: true, // 👈 shows horizontal grid lines (Y-axis)
          },
        },
        xaxis: {
          lines: {
            show: true, // 👈 hides vertical grid lines (X-axis)
          },
        },
      },
    xaxis: {
      categories: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${Math.round(val / 1000)}k`,
        style: {
          fontSize: '14px',
        },
      },
    },

    
  };

  const series = [
    {
      name: 'Users',
      data: [6000, 10000, 30000, 55000, 8000, 15000, 55000, 100000],
    },
  ];

  return <Chart options={options} series={series} type="area" height={300} />;
};

export default DottedAreaChart;
