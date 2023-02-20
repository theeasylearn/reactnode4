import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var now = new Date(); // Date() is libdary class in javascript 
//create javascript object 
var time = {
    hour : now.getHours(),
    minute : now.getMinutes(),
    second : now.getSeconds()
};
let Greetings = function(time)
{
    if (time.hour<12)
        return "Good Morning";
    else if(time.hour<=17)
        return "Good afternoon";
    else 
        return "Good evening";
}

let Page = function()
{
    return (<div className='container'>
        <div className='row'>
            <div className='col-12'>
               <h1> {Greetings(time)}</h1>
            </div>
        </div>
    </div>);
}
root.render(Page());
