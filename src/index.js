import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
// Redux
import { Provider } from 'react-redux';
import { store } from './store';
// Firebase
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './services/firebase';
// Firestore
import { createFirestoreInstance } from 'redux-firestore';

const rrfpConfig = {
}

const rrfpProps = {
  firebase,
  config: rrfpConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfpProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
