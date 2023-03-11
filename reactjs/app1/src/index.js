import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class SimpleInterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interest: 0.0
        };
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    CalculateInterest = () =>{
        console.log(this.state);
        this.setState({
            interest:(parseInt(this.state.amount) * parseInt(this.state.rate) * parseInt(this.state.year))/100
        });
    }
    render() {
        return (<div className='container'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className='card shadow'>
                        <div className='card-header'>
                            <h3>Interest Calculator</h3>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label for=''>Amount</label>
                                    <input type='number' name='amount'
                                        value={this.state.amount} className='form-control' onChange={this.onInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label for=''>rate</label>
                                    <input type='number' name='rate'
                                        value={this.state.rate} className='form-control' onChange={this.onInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <label for=''>year</label>
                                    <input type='number' name='year'
                                        value={this.state.year} className='form-control' onChange={this.onInputChange} />
                                </div>
                                <div className='mb-3'>
                                    <button type='button' onClick={this.CalculateInterest} className='btn btn-primary'>Calculate Interest</button>
                                </div>
                                <h1>Simple interest is {this.state.interest}</h1>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleInterestCalculator />);