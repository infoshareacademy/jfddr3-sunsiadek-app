import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
  color: #2e4053;
`;

export default function SingleAd() {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    const docRef = db.collection('announcements').doc(id);

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
  }, [id]);

  if (!announcement) {
    return 'Nie znaleziono ogłoszenia w bazie danych';
  }

  return (
    <div>
      <Title>{announcement.title}</Title>
      <Title>{announcement.descriptions}</Title>
      <p>{announcement.author}</p>
      <p>{announcement.category}</p>
      <p>{announcement.givetake}</p>
      <p>{announcement.status}</p>
    </div>
  );
}
