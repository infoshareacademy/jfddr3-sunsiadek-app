import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';

function Dashboard() {
  return (
    <div className="Dashboard">
      <NavigationBox></NavigationBox>
      <ButtonBases />
    </div>
  );
}

export default Dashboard;
