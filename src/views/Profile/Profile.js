import { Button , TextField } from '@material-ui/core';

import MultilineTextFields from '../../components/TextArea';
import styled from 'styled-components';
import { NavigationBox } from '../../components/NavigationBox';
import { ProfileNavBox } from '../../components/ProfileNaxBox';

const StyledProfile = styled.div`
  margin: 10px;
`;

function Profile() {
  return (
    <>
      <ProfileNavBox />

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
    </>
  );
}

export default Profile;
