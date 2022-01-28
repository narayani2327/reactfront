import React from 'react';
import pic from './pic.jpg';
class Art extends React.Component{
    render(){
        return([
            <div className='art'>
                <img src={pic}/>
                <div className='artext'>
                    <h2>Catch waves with adventure guide</h2>
                    <p>Gujarat is vastly underrated and it's a mysetery to us why the region isn't more well</p>
                </div>
            </div>
        ])
    }
}
export default Art;