import React from 'react';
import Header from './Header';
import All from './All';
class Food extends React.Component{
    render(){
        return([
            <>
                <Header/>
                <h2>Food</h2>
                <All/>
            </>
        ])
    }
}
export default Food;