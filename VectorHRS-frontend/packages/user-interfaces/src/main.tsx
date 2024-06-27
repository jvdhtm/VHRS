import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataCacheProvider } from './context/DataCache';

ReactDOM.render(
  <React.StrictMode>
    <DataCacheProvider>
      <App />
    </DataCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
