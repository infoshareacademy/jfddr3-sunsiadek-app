import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';

export default function FullUserDescription({ idA = 'lyntpy7s81lMGN1gmRKS' }) {
  var docRef = db.collection('users').doc(idA);

  const [description, setDescription] = useState(null);

  useEffect(() => {
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          const currentUserDescription = doc.data();
          setDescription(currentUserDescription);
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);
  if (!description) {
    return 'Nie znaleziono ogłoszenia w bazie danych';
  }

  return (
    <div>
      <h2>{description.userName}</h2>
      <p>{description.description}</p>
    </div>
  );
}
