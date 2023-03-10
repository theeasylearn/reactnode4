import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class LoginControl extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    updateLogin = () =>{
        this.setState({
            isLoggedIn : ! this.state.isLoggedIn
        })
    }
    render(){
        var output;
        if (this.state.isLoggedIn == false)
        {
            output = <button className='btn btn-primary' onClick={this.updateLogin}>Login</button>
        }
        else 
        {
            output = <button className='btn btn-danger' onClick={this.updateLogin}>Logout</button>
        }
        return output;
    }
}
function ConditinalRendering(){
    return(
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <LoginControl />
                </div>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ConditinalRendering />);