import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class ArgumentDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        }
    }
    Add(value)
    {
        this.setState({
            count:parseInt(this.state.count) + value
        });

    }
    Sub(value)
    {
        this.setState({
            count:parseInt(this.state.count) - value
        });
    }
    render(){
       return( <div className='container'>
       <div className='row'>
           <div className='col-12 mt-5'>
              <h1>Count = {this.state.count}</h1>
              <button className='btn btn-primary' onClick={() =>this.Add(1)}>Add 1</button>
              <button className='btn btn-danger' onClick={() =>this.Sub(1)}>Substract 1</button>
           </div>
       </div>
   </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArgumentDemo />);