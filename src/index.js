import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

//console.log(store)


ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={store.persistor}>
      <Provider store={store.store}>
        <App />
      </Provider>; 
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

