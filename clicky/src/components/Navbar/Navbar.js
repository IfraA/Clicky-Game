import React from "react";
import "./Navbar.css";
import Guess from "../Guess/Guess";
import Score from "../Score/Score";

const Navbar = props => (
    <nav>
        <ul>
            <li id="message" style={{ color: props.textColor }}>
                <Guess message={props.message}></Guess>
            </li>
            <li id="score">
                <Score score={props.score} topScore={props.topScore} />
            </li>
        </ul>
    </nav>
);

export default Navbar;
