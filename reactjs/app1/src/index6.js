import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function PlayerDetail(player)
{
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header'>
                        <h3>{player.name}</h3>
                    </div>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <tr>
                                <td width='25%'>Age</td>
                                <td>{player.age}</td>
                            </tr>
                            <tr>
                                <td>Runs</td>
                                <td>{player.runs}</td>
                            </tr>
                            <tr>
                                <td>Matches</td>
                                <td>{player.matches}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
//create javascript object 
let player = {
  name : 'Virat Kohli',
  age : 35,
  matches : 300,
  runs : 31255,
}
root.render(PlayerDetail(player));
