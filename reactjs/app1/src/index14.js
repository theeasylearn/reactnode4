import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Picture extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            height:this.props.height,
            width:this.props.width,
            src:this.props.src,
        }
    }
    ZoomImage = () =>{
        this.setState({
            height : this.state.height * 1.25,
            width : this.state.width * 1.25
        });
    }
    render() {
        var output = (
            <div className='col-4 mb-3'>
                <img height={this.state.height} width={this.state.width} src={this.state.src} className='img-fluid' /> <br/>
                <button className='btn btn-danger mt-2' onClick={this.ZoomImage}>Zoom</button>
            </div>
        )
        return output;
    }
}
function Albums()
{
    var output = (
        <div className='container'>
            <div className='row'>
                <div className='col-12'><h3>Album</h3></div>
                <Picture height='100' width='100' src='https://picsum.photos/100?random=1' />
                <Picture height='100' width='100' src='https://picsum.photos/100?random=2' />
                <Picture height='100' width='100' src='https://picsum.photos/100?random=3' />
                <Picture height='100' width='100' src='https://picsum.photos/100?random=4' />
            </div>
        </div>
    );
    return output;
}
root.render(<Albums />);