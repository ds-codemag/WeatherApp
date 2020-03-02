export const createUser = (user, callback) => (dispatch, getState, {getFirestore}) => {
  dispatch({ type: 'USER_PROCESSING' });

  getFirestore().collection('users').add({
    ...user
  })
    .then(() => {
      dispatch({ type: 'CREATE_USER_SUCCESS' })
      callback();;
    })
    .catch((error) => {
      dispatch({ type: 'CREATE_USER_ERROR', error });
    });
};

export const editUser = (user, callback) => (dispatch, getState, { getFirestore }) => {
  dispatch({ type: 'USER_PROCESSING' });
  const { id, ...rest} = user;
  getFirestore().collection('users').doc(id).set({
    ...rest
  })
    .then(() => {
      dispatch({ type: 'EDIT_USER_SUCCESS' });
      callback();
    })
    .catch((error) => {
      dispatch({ type: 'EDIT_USER_ERROR', error });
    });
};

export const removeUser = (id, callback) => (dispatch, getState, { getFirestore }) => {
  dispatch({ type: 'USER_PROCESSING' });

  getFirestore().collection('users').doc(id).delete()
    .then(() => {
      dispatch({type: 'DELETE_USER_SUCCESS'});
      callback();
    })
    .catch((error) => {
      dispatch({type: 'DELETE_USER_ERROR', error});
    });
};
