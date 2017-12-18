import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = (props) => {
    console.log(props.location);
    return (
    <div className="Navbar">
        <ul>
            <li><Link className="rightItem" to="/"onClick={props.loginClicked}>Reactor</Link></li>
            <li className="rightItem">{!props.clicked ?  <Link to="/login" className="rightItem" onClick={props.loginClicked}>Log In</Link>: null }</li>
        </ul>
    </div>)
    
}

export default Navbar;