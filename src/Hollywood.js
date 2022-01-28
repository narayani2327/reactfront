import React from 'react';
import Header from './Header';
import All from './All';
class Hollywood extends React.Component{
    render(){
        return([
            <>
                <Header/>
                <h2>Hollywood</h2>
                <All/>
            </>
        ])
    }
}
export default Hollywood;