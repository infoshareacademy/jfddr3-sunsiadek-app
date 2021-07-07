import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';

export default function SingleAd({ idA = 'lyntpy7s81lMGN1gmRKS' }) {
  var docRef = db.collection('announcements').doc(idA);

  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          const currentAd = doc.data();
          setAnnouncement(currentAd);
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);
  return (
    <>
      {announcement && (
        <div>
          <h2>{announcement.title}</h2>
          <p>{announcement.descriptions}</p>
          <p>{announcement.author}</p>
          <p>{announcement.category}</p>
          <p>{announcement.givetake}</p>
          <p>{announcement.status}</p>
        </div>
      )}
    </>
  );
}
