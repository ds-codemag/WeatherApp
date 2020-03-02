import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import UserMenu from '../UserMenu';

const UserMenuContainer = ({ signOut }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    signOut();
  };

  return (
    <UserMenu
      open={open}
      anchorEl={anchorEl}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onLogoutClick={handleLogoutClick}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(UserMenuContainer);
