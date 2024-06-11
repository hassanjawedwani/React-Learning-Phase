import {  NavLink } from "react-router-dom";

const MyNavbar = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/myabout">About</NavLink></li>
            <li><NavLink to="/mycontactus">Contact Us</NavLink></li>
            <li><NavLink to="/myportfolio">Portfolio</NavLink></li>
            
        </ul>
    );
}

export default MyNavbar;