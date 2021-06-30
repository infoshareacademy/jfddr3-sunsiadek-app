import React, { useState } from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';

function Dashboard() {
  const [userLog, setUserLog] = useState(null);

  return (
    <div className="Dashboard">
      <NavigationBox></NavigationBox>
      <ButtonBases />
    </div>
  );
}

export default Dashboard;
