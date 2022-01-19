import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      {/* <HashRouter> */}
      <HashRouter basename={(window as any).__MICRO_APP_BASE_ROUTE__ || '/'}>
        <App />
      </HashRouter>
    </React.StrictMode>,
  // </Provider>,
  document.getElementById('root-react')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
