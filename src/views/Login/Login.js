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

const StyledApplication = styled.div`
  background-color: #f2f3f4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  padding: 10px;
  height: auto;
  width: 300px;
  margin: 10px auto;
  border-radius: 5px;
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
      history.push('/');
    } catch (error) {
      setError('Nie udało się zalogowac');
    }
    setLoading(false);
  }

  return (
    <StyledApplication>
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
              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: '#2e4053',
                  margin: '15px',
                  borderRadius: '5px'
                }}
              >
                Login
              </Button>
              <Typography style={{ fontWeight: '500', color: '#2e4053' }}>
                Want to join us?{' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#2e4053',
                    fontWeight: '400'
                  }}
                  to="/register"
                >
                  click here to register 😊{' '}
                </Link>
              </Typography>
            </Box>
          </form>
        </StyledCard>
      </Box>
    </StyledApplication>
  );
}
