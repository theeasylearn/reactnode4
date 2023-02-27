import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Person extends React.Component
{
    //constructor 
    constructor(props)
    {
        super(props); //compulsory calling parent class constructor
        this.state = {
            'name': this.props.name,
            'contact': this.props.contact,
            'email': this.props.email
        }
    }
    render()
    {
        var output = (<div className='container'>
            <div className='row'>
                <div className='col-12 p-3'><h3>Person Detail</h3></div>
                <div className='col-4'>
                    <ul className='list-group'>
                        <li className='list-group-item'><b>Name</b> {this.state.name}</li>
                        <li className='list-group-item'><b>Contact</b> {this.state.contact}</li>
                        <li className='list-group-item'><b>Email</b> {this.state.email}</li>
                    </ul>
                </div>
            </div>
            </div>)
        return output;
    }
}
root.render(<Person name='Ankit Patel' contact='9662512857' email='ankit3385@gmail.com' />);