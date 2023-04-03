
import React from "react";
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom"
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';;

function NavBar() {
    return (
       <div className="navbar">
        <div className="toggleButton">            
            <ReorderIcon fontSize="small"/>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/about"> About </Link>
            <Link to="/hobbies"> Hobbies </Link>
        </div>
       </div>
    )
}

export default NavBar;