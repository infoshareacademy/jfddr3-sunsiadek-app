import React, { useState, useEffect } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc } from 'prettier';
const Category = ({ title }) => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    db.collection('announcements')
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setAnnouncements(doc.data());
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  return (
    <Container>
      <Typography as="h2">{title}</Typography>
      <ul>
      {announcements?.map(
        setAnnouncements =>
        <li key={setAnnouncements,doc.data}></li>
      )}
      </ul>
      <Link component={RouterLink} to="/dashboard">
        Wróć
      </Link>
    </Container>
  );
};

export default Category;
