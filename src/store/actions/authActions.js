export const signIn = (credentials) => (dispatch, getState, {getFirebase}) => {
  dispatch({ type: 'LOGIN_PROCESSING' });

  getFirebase().auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((error) => {
    dispatch({ type: 'LOGIN_ERROR', error });
  });
};

export const signOut = () => (dispatch, getState, {getFirebase}) => {
  getFirebase().auth().signOut().then(() => {
    dispatch({ type: 'LOGOUT_SUCCESS'});
  });
};
