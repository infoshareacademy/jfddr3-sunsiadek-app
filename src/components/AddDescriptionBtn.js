import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledAnchor } from '../views/Profile/Profile';

export function AddDescriptionBtn() {
  const history = useHistory();

  function handleGoToDescription(e) {
    e.preventDefault();
    history.push('/editprofile');
  }

  return (
    <div>
      <StyledAnchor onClick={handleGoToDescription}>
        Edit your profile 🖊️
      </StyledAnchor>
    </div>
  );
}
