import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Area extends React.Component
{
    //constructor 
    constructor(props)
    {
        super(props); //compulsory calling parent class constructor
        console.log('constructor called');
        this.height = props.height; //create property height and store height into it 
        this.width = props.width; //create property width and store width into it 
    }
    render()
    {
        let result = this.height * this.width; //result is local variable
        var output = (<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Area is {result}</h1>
                </div>
            </div>
            </div>)
        return output;
    }
}
root.render(<Area height='200' width='400' />);