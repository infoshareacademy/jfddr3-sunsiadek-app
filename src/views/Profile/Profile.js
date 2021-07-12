import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AddDescriptionBtn } from '../../components/AddDescriptionBtn';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 600px;
  margin: 10px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const PhotoContainer = styled.div`
  height: 250px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MockPhoto = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: url(https:\/\/cdn.pixabay.com/photo/2021/02/27/22/19/plant-6055943_960_720.jpg);
  margin: 10px;
`;

export const StyledAnchor = styled.a`
  color: #2e4053;
  font-weight: 500;
  padding: 8px 20px;
  border: 1px solid #2e4053;
  border-radius: 15px;
  margin: 10px 0 10px 0;
  width: auto;
  text-align: center;
`;

function Profile() {
  return (
    <>
      <StyledApplication>
        {/* <ProfileNavBox /> */}

        <DescriptionArea>
          <PhotoContainer>
            <MockPhoto />
            <Button
              style={{ height: '22px', width: '65px', borderRadius: '8px' }}
              size="small"
              variant="outlined"
              color="#2e4053"
            >
              edit
            </Button>
          </PhotoContainer>
          <AddDescriptionBtn />

          
          <Link to="/" style={{ textDecoration: 'none' }}>
            <StyledAnchor> ⬅️ Go back to dashboard</StyledAnchor>
            </Link>
          <Link to="/msg" style={{ textDecoration: 'none' }}>
            <StyledAnchor> Forum 📩</StyledAnchor>
          </Link>
          <Link to="/">
            <StyledAnchor> ⬅️ go back to dashboard</StyledAnchor>
          </Link>
        </DescriptionArea>
      </StyledApplication>
    </>
  );
}

export default Profile;
