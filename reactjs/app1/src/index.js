import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
function LoginForm()
{
    //create state variable using useState
    var [message,setMessage] = useState('here we will display message');
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');
    var [isEnabled,setisEnabled] = useState('');
    var [count,setCount] = useState(0);
    var SubmitForm = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        if(email=="admin@gmail.com" && password=="123123")
        {
             setMessage("login successfull");
        }
        else
        {
            setMessage("invalid login attempt");
            setCount(count+1);
        }
        if(count==3)
        {
            setisEnabled('disabled');
        }
    }
    return (<div className='container'>
        <div className='row'>
            <div className='col-lg-8 offset-2'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h3>Login</h3>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={SubmitForm} >
                            <div className='mb-3'>
                                <label htmlFor='email'>Email</label>
                                <input className='form-control' id='email' onChange={(event) => setEmail(event.target.value)}
                                placeholder='Email' type='email' value={email} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input className='form-control' id='password' onChange={(event) => setPassword(event.target.value)} placeholder='Password' type='password' value={password} />
                            </div>
                            <div className='mb-3'>
                                <input type='submit' value='Login' className='btn btn-danger' />
                            </div>
                            <div className='text-bg-info p-2 text-center'>{message}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);