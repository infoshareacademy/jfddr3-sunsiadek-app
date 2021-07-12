import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #f2f3f4;
  border: solid 1px #aaa;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export default function ShowProfile() {
  const [profile, setProfile] = useState(null);
  const { profil } = useParams();
  const history = useHistory();

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
    <Container>
      <Typography variant="h5">User info </Typography>
      {profile && <p>{profile.userName}</p>}
      {profile && <p>{profile.userDescription}</p>}
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </Button>
    </Container>
  );
}
