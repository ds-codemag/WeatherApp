import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/userActions';
import { makeStyles, Container, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import UserFormContainer from '../components/containers/UserFormContainer';

const styles = makeStyles({
  title: {
    marginBottom: '20px',
    textAlign: 'center'
  }
});

const AddUserPage = ({ createUser }) => {

  const classes = styles();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  const afterUserAdd = () => {
    setOpenSnackbar(true);
  };

  const handelAddUser = (user) => {
    createUser(user, afterUserAdd);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" className={classes.title}>Add User</Typography>
      <UserFormContainer onFormSubmitAction={handelAddUser} resetAfterSubmit />
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert severity="success">
          User created!
        </Alert>
      </Snackbar>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUser: (user, callback) => dispatch(createUser(user, callback))
})

export default connect(null, mapDispatchToProps)(AddUserPage);
