import CustomizedMenus from './Menu';
import styled from 'styled-components';
import { useAuth } from '../context/AuthProvider';
import logo from '../assets/logo.png';

const NavBox = styled.div`
  background-color: #f2f3f4;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const NavigationBox = () => {
  const { currentUser } = useAuth();

  return (
    <NavBox>
      <img src={logo} width="45" alt="This is a logo" />
      {currentUser && <p>Sunsiad: {currentUser.email}</p>}
      <CustomizedMenus></CustomizedMenus>
    </NavBox>
  );
};
