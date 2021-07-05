import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Category from '../../components/Category';

function Dashboard() {
  return (
    <Switch>
      <div className="Dashboard">
        <NavigationBox></NavigationBox>
        <Route path="/dashboard/other">
          <Category title="Other" />
        </Route>
        <Route path="/dashboard/events">
          <Category title="events" />
        </Route>
        <Route path="/dashboard/parking">
          <Category title="parking" />
        </Route>
        <Route path="/dashboard/helper">
          <Category title="helper" />
        </Route>
        <Route path="/dashboard/storage-space">
          <Category title="storage-space" />
        </Route>
        <Route path="/dashboard/small-fixes">
          <Category title="small-fixes" />
        </Route>
        <Route exact path="/dashboard">
          <ButtonBases />
        </Route>
      </div>
    </Switch>
  );
}

export default Dashboard;
