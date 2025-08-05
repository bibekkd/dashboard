
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const SemiCircleGauge = () => {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '60%',
        },
        track: {
          background: '#FFF7E8',
          strokeWidth: '100%',
          margin: 5, // optional
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: '36px',
            fontWeight: 400,
            formatter: (val: number) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: ['#FFCD71'],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: ['#FFCD71'],
    labels: ['Progress'],
  };

  const series = [84];

  return <Chart options={options} series={series} type="radialBar" height={250} />;
};

export default SemiCircleGauge;
