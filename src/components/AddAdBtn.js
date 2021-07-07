import React from 'react';
import { useHistory } from 'react-router-dom';

export function AddAdBtn(category) {
  const history = useHistory();

  function handleGoToPost(e) {
    e.preventDefault();
    history.push('/post');
  }

  return (
    <div>
      <button onClick={handleGoToPost}>Dodaj</button>
    </div>
  );
}
