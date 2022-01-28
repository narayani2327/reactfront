import React, { Component } from "react";
import pic from './pic.jpg';
class Latest extends React.Component{
    render(){
        return([
            <div className="latest">
                <img src={pic}/>
                <div>
                    <h3>Joshua Tree <br/>Overnight Adventaure</h3>
                    <p>Gujarat is vastly underrated and it's a mu=ystery to us why the region isn't more well-known as a tourist destination. It has a piethora of temples and palaces</p>
                </div>
            </div>
        ])
    }
}
export default Latest;