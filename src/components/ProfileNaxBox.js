import CustomizedMenus from './Menu';
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../context/AuthProvider';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NavBox = styled.div`
  width: 90%;
  /* background-color: red; */
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileNavBox = () => {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
      window.location.reload();
    } catch {
      setError('Nie udało się wylogować');
      console.lgo(error);
    }
  }

  return (
    <NavBox>
      <img src="./images/logo.png" width="45" alt="This is a logo" />
      <ExitToAppIcon onClick={handleLogout} style={{ fontSize: 35 }} />
    </NavBox>
  );
};
