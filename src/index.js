import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/integration/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
// import { rootReducer } from 'redux/store';
import store from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
