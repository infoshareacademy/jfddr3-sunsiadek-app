import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import NoteIcon from '@material-ui/icons/Note';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useAuth } from '../context/AuthProvider';
import { useHistory } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div>
      <MenuIcon
        color="primary"
        fontSize="large"
        style={{ color: 'black' }}
        onClick={handleClick}
      />

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <EmailIcon style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <NoteIcon style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText primary="Adverts" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon style={{ fontSize: 25 }} />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
