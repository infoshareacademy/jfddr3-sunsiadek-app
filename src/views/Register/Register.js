import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Card,
  TextField,
  Button,
  Avatar,
  Typography,
  Link
} from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import firebase from 'firebase';
import { auth } from '../../firebase-config';

const StyledCard = styled(Card)`
  padding: 10px;
  height: auto;
  width: 200px;
  margin: 10px auto;
`;

const StyledButton = styled(Button)`
  margin: auto;
  background-color: gray;
  width: auto;
`;

const StyledAvatar = styled(Avatar)`
  background-color: gray;
`;

const Register = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const emailRegister = e.target.email.value;
    const passwordRegister = e.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailRegister, passwordRegister)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Dodano użytkownika: ' + user.email);
      })
      .catch(error => console.error(error.message));
  };

  return (
    <Box align="center">
      <StyledCard elevation={10}>
        <Box align="center">
          <StyledAvatar>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h6"> Register</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField id="email" name="email" label="E-mail" />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
          />
          <Box>
            <StyledButton type="submit" variant="contained" color="primary">
              Register
            </StyledButton>
          </Box>
        </form>
      </StyledCard>
    </Box>
  );
};

export default Register;
