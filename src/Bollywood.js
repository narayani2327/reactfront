import React from 'react';
import Header from './Header';
import All from './All';
class Bollywood extends React.Component{
    render(){
        return([
            <>
                <Header/>
                <h2>Bollywood</h2>
                <All/>
            </>
        ])
    }
}
export default Bollywood;