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

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const emailLogin = e.target.email.value;
    const passwordLogin = e.target.password.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailLogin, passwordLogin)
      .then(userCredential => {
        var user = userCredential.user;
        console.log('Zalogowano użytkownika: ' + user.email);
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
          <Typography variant="h6"> Log in</Typography>
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
              Log in
            </StyledButton>
          </Box>
        </form>
      </StyledCard>
    </Box>
  );
};

export default Login;
