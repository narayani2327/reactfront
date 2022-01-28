import React from "react";
import './Index.css';
class Header extends  React.Component{
    render(){
        return([
            <>
                <div className="title">
                    <p className="the">The</p>
                    <p className="siren">Siren</p>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./bollywood">Bollywood</a></li>
                        <li><a href="./technology">Technology</a></li>
                        <li><a href="./hollywood">Hollywood</a></li>
                        <li><a href="./fitness">Fitness</a></li>
                        <li><a href="./food">Food</a></li> 
                    </ul>
                </div>
                <hr></hr>
            </>
        ])
    }
}
export default Header;