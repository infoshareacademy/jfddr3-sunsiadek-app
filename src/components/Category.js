import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Category = ({ title }) => {
  return (
    <Container>
      <Typography as="h2">{title}</Typography>
      <Link component={RouterLink} to="/dashboard">
        Wróć
      </Link>
    </Container>
  );
};

export default Category;
