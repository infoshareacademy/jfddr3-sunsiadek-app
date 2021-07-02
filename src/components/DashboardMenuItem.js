import styled from 'styled-components';
import React from 'react';
import ParkingSpace from '../DashboardCategories/ParkingSpace';

import SmallFixes from '../DashboardCategories/SmallFixes';
import StorageSpace from '../DashboardCategories/StorageSpace';
import Events from '../DashboardCategories/Events';
import Helper from '../DashboardCategories/Helper';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

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
