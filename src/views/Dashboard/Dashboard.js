import React from 'react';
import { Link , BrowserRouter as Switch, Route } from 'react-router-dom';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';

import Category from '../../components/Category';

function Dashboard() {
  return (
    <>
      <Link to="/post">/post - przekierowanie z dashboard</Link>
      This is Dashboard.
      <div className="Dashboard">
        <NavigationBox></NavigationBox>
        <Route path="/dashboard/other">
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
        <Route path="/dashboard/small-fixes">
          <Category title="small-fixes" />
        </Route>
        <Route exact path="/dashboard">
          ButtonBases route
          <ButtonBases />
        </Route>
      </div>
    </>
  );
}

export default Dashboard;
