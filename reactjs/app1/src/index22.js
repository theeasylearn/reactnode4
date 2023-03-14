import React from 'react';
import ReactDOM from 'react-dom/client';
class Picture extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            first : props.first,
            second : props.second,
            isFirst : false,
            source : props.first
        }
    }
    changePicture = () =>{
        if(this.state.isFirst==false)
        {
           this.setState({
            source : this.state.second
           })
        }
        else 
        {
            this.setState({
                source : this.state.first
               })
        }
        this.setState({
            isFirst: !this.state.isFirst
        });
    }
    render()
    {
        var output =<div className='col-lg-3'>
            <div className='card shadow'>
                <img src={this.state.source} className='img-fluid img-thumbnail' onClick={this.changePicture} />
            </div>
        </div>;
        
        return output;
    }
}
function Album()
{
    return (
        <div className='container'>
            <div className='row mt-5'>
                <Picture first="https://picsum.photos/300?random=1" second="https://picsum.photos/300?random=2" />

                <Picture first="https://picsum.photos/300?random=3" second="https://picsum.photos/300?random=4" />

                <Picture first="https://picsum.photos/300?random=5" second="https://picsum.photos/300?random=6" />

                <Picture first="https://picsum.photos/300?random=7" second="https://picsum.photos/300?random=8" />
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Album />);