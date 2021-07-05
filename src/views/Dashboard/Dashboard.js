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
        <Route path="/other">
          <Category title="Other" />
        </Route>
        <Route path="/events">
          <Category title="events" />
        </Route>
        <Route path="/parking">
          <Category title="parking" />
        </Route>
        <Route path="/helper">
          <Category title="helper" />
        </Route>
        <Route path="/storage-space">
          <Category title="storage-space" />
        </Route>
        <Route path="/small-fixes">
          <Category title="small-fixes" />
        </Route>
        <Route exact path="/">
          <ButtonBases />
        </Route>
      </div>
    </Switch>
  );
}

export default Dashboard;
