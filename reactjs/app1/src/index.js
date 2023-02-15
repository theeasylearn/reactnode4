import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10
var num2 = 3
// we can use any mathematical expression in JSX
var output = (<div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>Working with bootstrap</h1>
            </div>
            <div className='col-12'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro nihil accusantium sunt iure, doloremque accusamus quod! Exercitationem dolores, beatae ea explicabo eius repudiandae necessitatibus quidem temporibus voluptatibus, nesciunt cumque?</p>
            </div>
        </div>
    </div>)
root.render(output);
