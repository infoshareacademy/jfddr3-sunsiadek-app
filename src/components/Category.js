import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { AddAdBtn } from './AddAdBtn';

const Category = ({ title }) => {
  return (
    <Container>
      <AddAdBtn></AddAdBtn>
      <Typography as="h2">{title}</Typography>
      <Link component={RouterLink} to="/">
        Wróć
      </Link>
    </Container>
  );
};

export default Category;
