import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { useParams } from 'react-router';

export default function ShowProfile() {
  const [profile, setProfile] = useState(null);
  const { profil } = useParams();

  useEffect(() => {
    const docRef = db.collection('users').doc(profil);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          const currentProfile = doc.data();
          setProfile(currentProfile);
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, [profil]);

  return (
    <div>
      <h3>Informacje o autorze:</h3>
      {profile && <p>{profile.userDescription}</p>}
      {profile && <p>{profile.userName}</p>}
    </div>
  );
}
