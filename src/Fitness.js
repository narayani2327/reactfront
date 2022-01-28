import React from 'react';
import Header from './Header';
import All from './All';
class Fitness extends React.Component{
    render(){
        return([
            <>
                <Header/>
                <h2>Fitness</h2>
                <All/>
            </>
        ])
    }
}
export default Fitness;