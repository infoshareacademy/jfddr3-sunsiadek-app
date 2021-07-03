import { Button, TextField } from '@material-ui/core';

import MultilineTextFields from '../../components/TextArea';
import styled from 'styled-components';
import { NavigationBox } from '../../components/NavigationBox';
import { ProfileNavBox } from '../../components/ProfileNaxBox';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
`;

const StyledProfile = styled.div`
  width: 90%;
  margin: 10px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  height: 180px;
  width: 60%;
  overflow: auto;
  padding: 7px;
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
  background-color: red;
  height: 100px;
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
          <Description>user description</Description>
        </DescriptionArea>

        <StyledProfile>
          <div className="Profile">
            <form>
              <TextField id="standard-basic" label="Name" />
              <TextField id="standard-basic" label="Surname" />
              <TextField id="standard-basic" label="Age" />
              <TextField id="standard-basic" label="Phone number" />
              <TextField id="standard-basic" label="City" />
              <TextField
                id="standard-multiline-static"
                label="description"
                multiline
                rows={4}
                defaultValue=""
              />
              <Button variant="outlined" color="primary">
                Save
              </Button>
            </form>
          </div>
        </StyledProfile>
        <ReferenceContainer>blabla</ReferenceContainer>
      </StyledApplication>
    </>
  );
}

export default Profile;
