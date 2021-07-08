import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { db } from '../firebase-config';
import { AddAdBtn } from './AddAdBtn';

const Category = ({ title: categoryTitle, categoryName }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const snapshot = await db
          .collection('announcements')
          .where('category', '==', categoryName)
          .get();
        setAnnouncements(snapshot.docs.map(doc => doc.data()));
        console.log(snapshot);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <Container>
      <AddAdBtn></AddAdBtn>
      <Typography variant="h4">{categoryTitle}</Typography>
      <Link component={RouterLink} to="/">
        Wróć do listy kategorii
      </Link>

      <List>
        {announcements.map(({ title, descriptions, author }) => {
          return (
            <ListItem>
              <ListItemText
                primary={<Typography variant="h5">{title}</Typography>}
                secondary={
                  <>
                    <Typography>Treść: {descriptions}</Typography>
                    <Typography>Author: {author}</Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Category;
