import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10
var num2 = 3
// we can use any mathematical expression in JSX
var output = (<div>
    <h1>Mathematical Expression in JSX</h1>
    <p><b>Addition = </b>{num1 + num2}</p>
    <p><b>Substraction = </b>{num1 - num2}</p>
    <p><b>Multiplication = </b>{num1 * num2}</p>
    <p><b>Division = </b>{num1 / num2}</p>
    </div>)
root.render(output);
