import React from 'react';
import { useHistory } from 'react-router-dom';

export function AddDescriptionBtn() {
  const history = useHistory();

  function handleGoToDescription(e) {
    e.preventDefault();
    history.push('/editprofile');
  }

  return (
    <div>
      <button onClick={handleGoToDescription}>Edit your profile</button>
    </div>
  );
}
