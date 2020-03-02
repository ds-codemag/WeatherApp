import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container } from '@material-ui/core';

import UserCardContainer from '../components/containers/UserCardContainer';

const UserDetailsPage = ({ user, match }) => {

  return (
    <Container>
      {
        user ? <UserCardContainer
          user={{
            id: match.params.id,
            ...user
          }}
        /> : <div>Loading...</div>
      }
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ['users'])
)(UserDetailsPage);
