import React from 'react';
// import CustomizedMenus from '../../components/Menu';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';

function Dashboard() {
  return (
    <div className="Dashboard">
      {/* <CustomizedMenus></CustomizedMenus> */}
      <NavigationBox></NavigationBox>
      <ButtonBases />
    </div>
  );
}

export default Dashboard;
