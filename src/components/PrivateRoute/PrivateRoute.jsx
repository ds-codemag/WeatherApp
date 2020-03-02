import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute = ({ component: ChildComponent, ...rest }) => {

  const auth = useSelector(state => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <ChildComponent {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
