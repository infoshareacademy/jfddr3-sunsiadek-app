import styled from 'styled-components';
import React from 'react';
import ParkingSpace from '../DashboardCategories/ParkingSpace';
import ShopBuyer from '../DashboardCategories/ShopBuyer';
import SmallFixes from '../DashboardCategories/SmallFixes';
import StorageSpace from '../DashboardCategories/StorageSpace';
import Events from '../DashboardCategories/Events';
import Helper from '../DashboardCategories/Helper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const DashboardMenuItem = () => {
  return (
    <Router>
      <Switch>
        <StyledDiv>
          <ParkingSpace />
          <ShopBuyer />
          <SmallFixes />
          <StorageSpace />
          <Helper />
          <Events />
        </StyledDiv>
      </Switch>
    </Router>
  );
};

export default DashboardMenuItem;
