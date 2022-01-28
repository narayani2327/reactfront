import React from 'react';
import Header from './Header';
import All from './All';
class Technology extends React.Component{
    render(){
        return([
            <>
                <Header/>
                <h2>Technology</h2>
                <All/>
            </>
        ])
    }
}
export default Technology;