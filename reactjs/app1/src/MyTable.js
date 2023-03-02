import React from 'react';
class MyTable extends React.Component
{
    constructor(props)
    {
        super(props);
        const DISHPRICE = 100;
        const ROTIPRICE = 10;
        const CHASPRICE = 8;
        const PAPADPRICE = 7.50;
        const SWEETPRICE = 11.25;
        //properties
        this.no = props.no;
        this.name = props.name;
        //create state variable
        this.state = {
            dish : props.dish,
            roti : 0,
            chas : 0,
            papad : 0,
            sweet : 0,
            total : 0,
        }
    }
    
    UpdateDish = () =>{
        this.setState({
            dish: parseInt(this.state.dish) + 1
        });
    }
    render()
    {
        var output;
        output =(
        <div className='col-lg-3 mb-1'>
            <div className='card'>
                <div className='card-header text-bg-primary'>
                    <div className='row'>
                        <div className='col-3'>
                            <h2 className='text-center'>{this.no}</h2>
                        </div>
                        <div className='col-9'>
                            <h5 className='text-end'>{this.name}</h5> 
                            <h4 className='text-end'>&#8377; {this.state.total}</h4> 
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-12 d-grid'>
                        <button onClick={this.UpdateDish} className='btn btn-primary'>Dish {this.state.dish}</button>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6 d-grid'>
                        <button className='btn btn-danger'>Roti {this.state.roti}</button>
                        </div>
                        <div className='col-6 d-grid'>
                        <button className='btn btn-warning'>Chas {this.state.chas}</button>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-6 d-grid'>
                        <button className='btn btn-info'>Papad {this.state.papad}</button>
                        </div>
                        <div className='col-6 d-grid'>
                        <button className='btn btn-dark'>Sweet {this.state.sweet}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        return output;
    }
}
export default MyTable