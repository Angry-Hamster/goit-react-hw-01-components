import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import randomColor from './components/Statistics/randomColor.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


let ul = document.getElementById('colorUl')
ul.childNodes.forEach(item => {
  item.style.backgroundColor = randomColor()
})