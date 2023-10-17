import React from 'react';
import HomePage from '@/app/pages/main'
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '20px 0', // Adds spacing above and below the header
};

const Dashboard = () => {
  return (
    <div>
      {/* Content of your dashboard */}
      <h1 style={headerStyle}>Dashboard Content</h1>

      <iframe
        src="https://admin-dashboard-78wy.vercel.app/"
        title="External Dashboard"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
};
export default Dashboard;