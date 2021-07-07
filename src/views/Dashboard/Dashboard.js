import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { NavigationBox } from '../../components/NavigationBox';
import { Route } from 'react-router-dom';
import Category from '../../components/Category';
import { CATEGORIES } from '../../constants';

function Dashboard() {
  return (
    <div className="Dashboard">
      <NavigationBox />
      <Route path="/other">
        <Category title="Other" categoryName={CATEGORIES.OPTHER} />
      </Route>
      <Route path="/events">
        <Category title="Events" categoryName={CATEGORIES.EVENTS} />
      </Route>
      <Route path="/parking">
        <Category
          title="Parking Space"
          categoryName={CATEGORIES.PARKING_SPACE}
        />
      </Route>
      <Route path="/helper">
        <Category title="Helper" categoryName={CATEGORIES.HELPER} />
      </Route>
      <Route path="/storage-space">
        <Category title="Storage Space" categoryName={CATEGORIES.STORAGE} />
      </Route>
      <Route path="/small-fixes">
        <Category title="Small Fixes" categoryName={CATEGORIES.SMALL_FIXES} />
      </Route>
      <Route exact path="/">
        <ButtonBases />
      </Route>
    </div>
  );
}

export default Dashboard;
