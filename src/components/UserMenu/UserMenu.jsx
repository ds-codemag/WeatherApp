import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { StyledIcon } from './UserMenu.styled';

const UserMenu = ({
  open,
  anchorEl,
  onMenuOpen,
  onMenuClose,
  onLogoutClick
 }) => {

  const auth = useSelector(state => state.firebase.auth);

   return (
    <div>
      <IconButton onClick={onMenuOpen}>
        <StyledIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onMenuClose}
      >
        {
          isLoaded(auth) && !isEmpty(auth) ?
            <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
          :
            <MenuItem component={Link} to="/login">Login</MenuItem>
        }
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  onMenuOpen: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};

export default UserMenu;
