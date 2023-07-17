import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EngagementRateChart = ({ engagementData }) => {
  if (!engagementData) {
    return <div>No engagement data available</div>;
  }

  const { followers, posts } = engagementData;

  if (!followers || !posts) {
    return <div>Invalid engagement data format</div>;
  }

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);
  const engagementRate = ((totalLikes + totalComments) / followers) * 100;

  const data = [
    {
      name: 'Engagement Rate',
      rate: engagementRate.toFixed(2),
    },
  ];

  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="rate" fill="#8884d8" />
    </BarChart>
  );
};

export default EngagementRateChart;
