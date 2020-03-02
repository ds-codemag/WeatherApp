import React from 'react';
import { compose } from 'redux';
import { useSelector, connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { makeStyles, Container, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import UsersList from '../components/UsersList';

const style = makeStyles({
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: 30,
    right: 30
  },
});

const HomePage = ({ users }) => {

  const classes = style();
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Container>
      {users && <UsersList users={users} />}

      {
        isLoaded(auth) && !isEmpty(auth) && <Fab color="secondary" className={classes.fabButton} component={Link} to="/add-user"><Add /></Fab>
      }
    </Container>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['users'])
)(HomePage);
