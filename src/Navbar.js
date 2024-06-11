import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <ul className="navbar">
            <li><NavLink className="nav" to="/">Home</NavLink></li>
            <li><NavLink className="nav" to="/about">About</NavLink></li>
            <li><NavLink className="nav" to="/Career">Career</NavLink></li>
            <li><NavLink className="nav" to="/login">Login</NavLink></li>
            </ul>
        </>
    );
    
}

export default Navbar;