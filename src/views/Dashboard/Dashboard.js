import React from 'react';
import CustomizedMenus from '../../components/Menu';
import ButtonBases from '../../components/DashboardMenuButtons';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <CustomizedMenus></CustomizedMenus>
      <ButtonBases />
    </div>
  );
}

export default Dashboard;
