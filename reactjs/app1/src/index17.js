import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class EventDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLike : false,
            color : 'btn btn-danger'
        }
    }
    ButtonClick = () =>{
        this.setState({
            isLike : !this.state.isLike
        },
        () => {
            //this code will execute only after state gets updated
            if(this.state.isLike == false)
            {
               this.setState({
                color: 'btn btn-danger'
               });
            }
            else 
            {
               this.setState({
                color: 'btn btn-primary'
               });
            }
        });
    }
    render(){
       return( <div className='container'>
       <div className='row'>
           <div className='col-12 mt-5'>
               <button className={this.state.color} onClick={this.ButtonClick}>
                {this.state.isLike==true ? 'Like':'Dislike'}</button>
           </div>
       </div>
   </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventDemo />);