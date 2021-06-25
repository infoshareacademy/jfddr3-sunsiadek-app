import React from 'react';
import CustomizedMenus from '../../components/Menu';
import DashboardMenuItem from '../../components/DashboardMenuItem';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <CustomizedMenus></CustomizedMenus>
      <DashboardMenuItem />
    </div>
  );
}

export default Dashboard;
