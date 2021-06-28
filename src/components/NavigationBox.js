import CustomizedMenus from './Menu';
import styled from 'styled-components';

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

export const NavigationBox = () => {
  return (
    <NavBox>
      <img src="./images/logo.png" width="45" alt="This is a logo" />
      <CustomizedMenus></CustomizedMenus>
    </NavBox>
  );
};
