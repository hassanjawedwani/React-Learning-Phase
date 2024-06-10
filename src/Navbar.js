// import { Component } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
const Navbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {name}  = searchParams;
    console.log(name)
    return (
        <>
            <ul className="navbar">
            <li><NavLink className="nav" to="/">Home</NavLink></li>
            <li><NavLink className="nav" to="/about">About</NavLink></li>
            </ul>
            <li><Link to="/user/hassan">Hassan</Link></li>
            <li><Link to="/user/numan">Numan</Link></li>
            {/* <h1>Name: {searchParams.get('name')}</h1>
            <h1>Age: {searchParams.get('age')}</h1> */}
            <input type="text" onChange={(event)=>{setSearchParams({name: event.target.value, age: 20})}}/>

        </>
    );
    
}

export default Navbar;