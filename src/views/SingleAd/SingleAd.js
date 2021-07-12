import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';

const Title = styled.p`
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  background-color: #f2f3f4;
  border: solid 1px #aaa;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export default function SingleAd() {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const history = useHistory();

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
    <Container>
      <Typography variant="h5">{announcement.title}</Typography>
      <Title>{announcement.descriptions}</Title>
      <p>{announcement.author}</p>
      <ButtonContainer>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            history.goBack();
          }}
        >
          GO BACK
        </Button>
        <Button
          variant="outlined"
          size="small"
          component={Link}
          to={`/showprofile/${announcement.author}`}
        >
          Show contact details
        </Button>
      </ButtonContainer>
    </Container>
  );
}
