import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeUser } from '../../store/actions/userActions';
import UserCard from '../UserCard';

const UserCardContainer = ({ user, removeUser }) => {

  const [userAuth, setUserAuth] = React.useState({
    auth: false,
    error: null
  });
  const history = useHistory();

  const afterUserRemove = () => {
    history.push("/")
  }

  const handleRemoveButtonClick = () => {
    removeUser(user.id, afterUserRemove)
  }

  const handleUserAuth = (password) => {
    if (password === user.password) {
      setUserAuth({
        auth: true,
        error: null
      })
    } else {
      setUserAuth({
        auth: false,
        error: 'Wrong password!'
      })
    }
  }

  return (
    <UserCard
      user={user}
      userAuth={userAuth}
      onUserAuth={handleUserAuth}
      onRemoveButtonClick={handleRemoveButtonClick}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeUser: (id, callback) => dispatch(removeUser(id, callback))
});

export default connect(null, mapDispatchToProps)(UserCardContainer);
