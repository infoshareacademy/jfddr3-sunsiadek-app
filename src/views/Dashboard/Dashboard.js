import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Category from '../../components/Category';
import { CATEGORIES } from '../../constants';

function Dashboard() {
  return (
    <Switch>
      <div className="Dashboard">
        <NavigationBox></NavigationBox>
        <Route path="/dashboard/other">
          <Category title="Other" categoryName={CATEGORIES.OPTHER} />
        </Route>
        <Route path="/dashboard/events">
          <Category title="Events" categoryName={CATEGORIES.EVENTS} />
        </Route>
        <Route path="/dashboard/parking">
          <Category
            title="Parking Space"
            categoryName={CATEGORIES.PARKING_SPACE}
          />
        </Route>
        <Route path="/dashboard/helper">
          <Category title="Helper" categoryName={CATEGORIES.HELPER} />
        </Route>
        <Route path="/dashboard/storage-space">
          <Category title="Storage Space" categoryName={CATEGORIES.STORAGE} />
        </Route>
        <Route path="/dashboard/small-fixes">
          <Category title="Small Fixes" categoryName={CATEGORIES.SMALL_FIXES} />
        </Route>
        <Route exact path="/dashboard">
          <ButtonBases />
        </Route>
      </div>
    </Switch>
  );
}

export default Dashboard;
