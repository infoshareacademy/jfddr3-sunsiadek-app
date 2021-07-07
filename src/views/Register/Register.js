import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Card,
  TextField,
  Button,
  Avatar,
  Typography
} from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import { useAuth } from '../../context/AuthProvider';

import { Link, useHistory } from 'react-router-dom';

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

export default function Register() {
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (e.target.password.value !== e.target.passwordconfirm.value) {
      return setError('Hasła nie są takie same');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(e.target.email.value, e.target.password.value);
      history.push('/');
    } catch {
      setError('Nie udało się utworzyć konta');
    }
    setLoading(false);
  }

  return (
    <Box align="center">
      <StyledCard elevation={10}>
        <Box align="center">
          <StyledAvatar>
            <LockOpenOutlinedIcon />
          </StyledAvatar>
          <Typography variant="h6"> Register</Typography>
          {error && <p>{error}</p>}
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            type="email"
            name="email"
            label="E-mail"
            required
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            required
          />
          <TextField
            id="passwordconfirm"
            name="passwordconfirm"
            label="Password Confirmation"
            type="password"
          />
          <Box>
            <StyledButton
              disabled={loading}
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </StyledButton>
            <Typography>
              Masz juz konto? <Link to="/login">Sign In</Link>
            </Typography>
          </Box>
        </form>
      </StyledCard>
    </Box>
  );
}
