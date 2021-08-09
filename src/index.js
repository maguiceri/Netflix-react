import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Breaking from './pages/breaking';
ReactDOM.render(
  <React.StrictMode>
   
    <Router>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/breaking" component={Breaking}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
