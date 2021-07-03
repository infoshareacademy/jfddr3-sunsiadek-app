import React, { useState } from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';

function Dashboard() {
  const [userLog, setUserLog] = useState(null);

  return (
    <div className="Dashboard">
      <NavigationBox></NavigationBox>
      {/* opakowac calosc w router +
       switch +
       route - komponent ( parking )
       route - komponent (events )
       route */}
      {/* tutaj umiescic zaleznosci sciezki */}

      <ButtonBases />
    </div>
  );
}

export default Dashboard;
