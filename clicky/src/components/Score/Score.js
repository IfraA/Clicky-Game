import React from "react";
import "./score.css";
// import "./Title.css";

const Score = props => (
    <div>
        <h1 div="score">Score : {props.score}    ||    Top Score : {props.topScore}</h1>

    </div>
);

export default Score;