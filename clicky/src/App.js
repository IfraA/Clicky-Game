import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    message: "Make a Guess",
    cards,
    score: 0,
    topScore: 0
  };

  handleClick = (index) => {
    //add to the total score
    const card = this.state.cards[index];

    if (card.clicks > 0) {
      this.restartGame();
    } else {
      const newScore = this.state.score + 1;
      card.clicks++;

      var cardsWithoutClickedCard = this.state.cards.slice(0, index).concat(this.state.cards.slice(index + 1))
      var newCards = [...cardsWithoutClickedCard, card]
      // add to the clicks of the id card
      //reorder the cards by clicks

      this.setState({
        score: newScore,
        cards: newCards,
        message: "Keep going!"
      })
    }
  }

  restartGame = () => {
    //destructuring the object
    const { score, topScore } = this.state;
    //ternary operator(if else statement)
    const newTop = score > topScore ? score : topScore;
    this.setState({
      topScore: newTop,
      score: 0,
      message: "Make a Guess"
    })

  }

  sortByClicks(card1, card2) {
    return (card2.clicks < card1.clicks)
  }

  // render a character card compoent for each character
  render() {
    return (
      <Wrapper>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Title>Play for the Griffins!</Title>

        {this.state.cards.sort(this.sortByClicks).map((card, index) => <CharacterCard name={card.name} image={card.url} key={card.id} index={index} handleClick={this.handleClick} />)}



      </Wrapper>
    )
  }
}


export default App;