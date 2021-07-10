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
    <StyledApplication>
      <Box align="center">
        <StyledCard elevation={10}>
          <Box align="center">
            <StyledAvatar>
              <LockOpenOutlinedIcon />
            </StyledAvatar>
            <Typography variant="h6">Register</Typography>
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
                Register
              </Button>
              <Typography style={{ fontWeight: '500', color: '#2e4053' }}>
                Already have an account?{' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#2e4053',
                    fontWeight: '400'
                  }}
                  to="/login"
                >
                  click here to sign in 💻
                </Link>
              </Typography>
            </Box>
          </form>
        </StyledCard>
      </Box>
    </StyledApplication>
  );
}
