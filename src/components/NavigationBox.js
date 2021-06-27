import CustomizedMenus from './Menu';
import styled from 'styled-components';

const NavBox = styled.div`
  width: 90%;
  /* background-color: red; */
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationBox = () => {
  return (
    <NavBox>
      <CustomizedMenus></CustomizedMenus>
      <p>LOGO</p>
    </NavBox>
  );
};
