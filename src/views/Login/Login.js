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

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(e.target.email.value, e.target.password.value);
      history.push('/dashboard');
    } catch (error) {
      setError('Nie udało się zalogowac');
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
          <Typography variant="h6"> Login</Typography>
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
          <Box>
            <StyledButton
              disabled={loading}
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </StyledButton>
            <Typography>
              Potrzebujesz konta? <Link to="/register">Sign Up</Link>
            </Typography>
          </Box>
        </form>
      </StyledCard>
    </Box>
  );
}
