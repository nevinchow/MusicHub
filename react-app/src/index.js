import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import  CurrentSongsProvider  from './context/queue';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrentSongsProvider>
        <App />
        </CurrentSongsProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
