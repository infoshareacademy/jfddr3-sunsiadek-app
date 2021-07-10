import { Button, TextField } from '@material-ui/core';

import MultilineTextFields from '../../components/TextArea';
import styled from 'styled-components';
import { NavigationBox } from '../../components/NavigationBox';
import { ProfileNavBox } from '../../components/ProfileNaxBox';
import { UserDescription } from '../../components/UserDescription';
import { Link } from 'react-router-dom';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
`;

const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 10px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  height: 350px;
  width: 100%;
  padding: 7px;
  display: flex;
`;

const Form = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PhotoContainer = styled.div`
  height: 250px;
  width: 40%;
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

const ReferenceContainer = styled.div`
  height: 220px;
  width: 90%;
  margin: 10px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledAnchor = styled.a`
  color: #2e4053;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid #2e4053;
  border-radius: 12px;
  margin: 10px 0 60px 0;
  width: 50%;
  text-align: center;
`;

function Profile() {
  return (
    <>
      <StyledApplication>
        <ProfileNavBox />

        <DescriptionArea>
          <PhotoContainer>
            <MockPhoto />
            <Button size="small" variant="outlined" color="primary">
              edit
            </Button>
          </PhotoContainer>
          <Description>
            <Form>
              <TextField id="standard-basic" label="Name" />
              <TextField
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={5}
                defaultValue=""
              />

              <Button variant="outlined" color="primary">
                Save
              </Button>
            </Form>
            <UserDescription />
          </Description>
        </DescriptionArea>
        <ReferenceContainer>
          <StyledAnchor>go to your messages...</StyledAnchor>
          <Link to="/">
            <StyledAnchor>back to dashboard...</StyledAnchor>
          </Link>
        </ReferenceContainer>
      </StyledApplication>
    </>
  );
}

export default Profile;
