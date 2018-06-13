import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

class App extends Component {
  state = {
    // images
  };

  // render a character card compoent for each character
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game </Title>
        <CharacterCard>
          {/* //each image should map over the cards and change position upon being clicked */}
        </CharacterCard>
      </Wrapper>
    )
  }
}


export default App;
