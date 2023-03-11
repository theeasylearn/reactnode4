import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ConditinalRendering(props)
{
    var messages = props.messages;
    var isLoggedIn = props.isLoggedIn;
    return(
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-12'>
                    {messages.length>0 && <button className='btn btn-info'>you have {messages.length} unread message</button>} 

                    {messages.length == 0 && <button className='btn btn-danger'>you have no new messages</button>}
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    you have currently {isLoggedIn==1 ? "logged in":"not logged in"}
                </div>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
var messages = ['hello','how are you',' good morning'];
// var messages = [];
root.render(<ConditinalRendering messages={messages} isLoggedIn={0} />);