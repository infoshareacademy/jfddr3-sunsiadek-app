import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import SmallFixes from '../../DashboardCategories/SmallFixes';
import StorageSpace from '../../DashboardCategories/StorageSpace';
import Helper from '../../DashboardCategories/Helper';
import ParkingSpace from '../../DashboardCategories/ParkingSpace';
import Events from '../../DashboardCategories/Events';
import Other from '../../DashboardCategories/Other';

function Dashboard() {
  // const [userLog, setUserLog] = useState(null);

  return (
    <Switch>
      <div className="Dashboard">
        <NavigationBox></NavigationBox>
        <Route path="/dashboard/other">
          <Other />
        </Route>
        <Route path="/dashboard/events">
          <Events />
        </Route>
        <Route path="/dashboard/parking">
          <ParkingSpace />
        </Route>
        <Route path="/dashboard/helper">
          <Helper />
        </Route>
        <Route path="/dashboard/storage-space">
          <StorageSpace />
        </Route>
        <Route path="/dashboard/small-fixes">
          <SmallFixes />
        </Route>
        <Route exact path="/dashboard">
          <ButtonBases />
        </Route>
      </div>
    </Switch>
  );
}

export default Dashboard;
