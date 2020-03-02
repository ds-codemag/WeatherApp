import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { editUser } from '../store/actions/userActions';
import { makeStyles, Container, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import UserFormContainer from '../components/containers/UserFormContainer';

const styles = makeStyles({
  title: {
    marginBottom: '20px',
    textAlign: 'center'
  }
});

const EditUserPage = ({ user, editUser, match}) => {

  const classes = styles();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  const afterUserEdit = () => {
    setOpenSnackbar(true);
  }

  const handleEditUser = (user) => {
    editUser(user, afterUserEdit);
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" className={classes.title}>Edit User</Typography>
      {user && <UserFormContainer initialFormValues={{
        id: match.params.id,
        ...user
      }} onFormSubmitAction={handleEditUser} />}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success">
          User edited!
        </Alert>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const users = state.firestore.data.users;
  const user = users && users[ownProps.match.params.id];

  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => ({
  editUser: (user, callback) => dispatch(editUser(user, callback))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ['users'])
)(EditUserPage);
