import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { App } from 'components/App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <PersistGate
      loading={null}
      // Можна сюди підкинути лоадер
      persistor={persistor}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
