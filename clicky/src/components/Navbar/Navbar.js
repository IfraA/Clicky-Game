import React from "react";
import "./Navbar.css";
import Guess from "../Guess/Guess";
import Score from "../Score/Score";

const Navbar = props => (
    <nav className="nav navbar">
        <ul>
            <li>
                Clicky Game
            </li>
            <li>
                <Guess message={props.message}></Guess>
            </li>
            <li>
                <Score />
            </li>
        </ul>
    </nav>

);

export default Navbar;