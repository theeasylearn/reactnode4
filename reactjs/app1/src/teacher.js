import React from 'react';

class Teacher extends React.Component
{
    constructor(props)
    {
        super(props); //required 
        this.state = {
            age : props.age,
            name : props.name
        }
    }
    IncreaseAge = () => {
        this.setState({
            age: parseInt(this.state.age) + 1
        });
    }
    DecreaseAge = () => {
        this.setState({
            age: parseInt(this.state.age) - 1
        });
    }
    render()
    {
        var output = (
            <div className='col-lg-4'>
                <div className='card'>
                    <div className='card-header'><h3>Name :- {this.state.name}</h3></div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <button className='btn btn-danger' onClick={this.DecreaseAge}>-</button> 
                                <b>Age </b> {this.state.age} 
                                <button className='btn btn-danger' onClick={this.IncreaseAge}>+</button>
                            </li>
                            <li className='list-group-item'><b>No of days {this.state.age * 365}</b></li>
                            <li className='list-group-item'><b>Service Year</b> {60 - this.state.age}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        return output;
    }
}
export default Teacher;