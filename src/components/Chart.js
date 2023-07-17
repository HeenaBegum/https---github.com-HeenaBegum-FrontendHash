import React from 'react';
import packageData from './engagementData.json';
import EngagementRateChart from './EngagementRateChart ';

const Chart = () => {
  const engagementData = packageData.engagementData;

  return (
    <div>
      <h1>Engagement Rate Chart</h1>
      <EngagementRateChart engagementData={engagementData} />
    </div>
  );
};

export default Chart;
