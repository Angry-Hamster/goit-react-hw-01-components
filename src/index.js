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

// console.clear();

// let ul = document.querySelector('.Statstscs_ul__1rbJ_')
let ul = document.getElementById('colorUl')
ul.childNodes.forEach(item => {
  item.style.backgroundColor = randomColor()
})