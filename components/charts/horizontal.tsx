
import React from 'react';

const GradientBarChart = () => {
  const data = [
    { state: 'NY', value: 120 },
    { state: 'MA', value: 80 },
    { state: 'NH', value: 70 },
    { state: 'OR', value: 50 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="">
      {/* Title */}
      <div className="px-4 py-2 mb-4">
        <h2 className="text-xl font-semibold text-black">Top states</h2>
      </div>

      {/* Chart */}
      <div className="px-3">
        {data.map((item) => (
          <div key={item.state} className="relative">
            {/* Dashed border container */}
            <div className="p-3 relative">
              {/* Background bar with gradient */}
              <div 
                className="h-12 rounded-md relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #FFCD71 0%, #FFF8EB 100%)',
                  width: `${(item.value / maxValue) * 100}%`
                }}
              >
                {/* State label on the left */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-xl font-bold text-gray-900">
                    {item.state}
                  </span>
                </div>
                
                {/* Value label on the right */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-lg font-semibold text-gray-900">
                    {item.value}K
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientBarChart;