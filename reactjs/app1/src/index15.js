import React from 'react';
import ReactDOM from 'react-dom/client';
import Teacher from './teacher';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Team()
{
    return (
        <div className='container'>
            <div className='row'>
                <Teacher name="Ankit" age='38' />
                <Teacher name="Param" age='18' />
                <Teacher name="Dhaivat" age='25' />
            </div>
        </div>
    )
}
root.render(<Team />);