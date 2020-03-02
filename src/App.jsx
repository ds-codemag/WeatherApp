import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from './components/Layout';

const style = makeStyles({
  loader: { position: 'absolute', top: '50%', left: '50%', margin: '-20px 0 0 -20px' }
})

const App = () => {

  const classes = style();
  const auth = useSelector(state => state.firebase.auth);

  return (
    <BrowserRouter>
      <CssBaseline />
      {
        isLoaded(auth) ? <Layout /> : <CircularProgress className={classes.loader} />
      }
    </BrowserRouter>
  );
}

export default App;
