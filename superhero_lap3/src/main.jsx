import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App'
import reducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';


const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
