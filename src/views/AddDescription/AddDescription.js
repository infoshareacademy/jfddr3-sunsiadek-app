import React, { useRef } from 'react';
import { db } from '../../firebase-config';
//import firebase from 'firebase';
import { useAuth } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';

export default function AddDescription() {
  const userName = useRef();
  const userDescription = useRef();
  //const { currentUser } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      userName: userName.current.value,
      userDescription: userDescription.current.value
    };
    db.collection('users').add(userData);
    history.push('/profile');
  }

  return (
    <>
      <h2>Edytuj swój profil</h2>
      <form>
        <div>
          <label for="userName">Name</label>
          <input ref={userName} required id="userName" name="userName"></input>
        </div>
        <div>
          <label for="userDescription">Description</label>
          <textarea
            ref={userDescription}
            style={{ height: 100, width: 400 }}
            required
            id="userDescription"
            name="userDescription"
          ></textarea>
        </div>

        <button onClick={handleSubmit}>Ready!</button>
      </form>
    </>
  );
}
