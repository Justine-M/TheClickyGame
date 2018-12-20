import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    chracters: [...friends],
    clickedFriends: [],
    score: 0


  };

  //when you click on a card ... the friend is taken out of the array
  imageClick = id => {
    let guess = false;
    console.log(id);
    const newArray = this.state.chracters.map(character => {
      const newCharacter = { ...character }
      if (newCharacter.id === id && !newCharacter.clicked) {
        console.log(character);
        newCharacter.clicked = true
        guess = true;
      }
      return newCharacter
    })
    if (guess){
      this.winner(newArray);

    }
    else{
      this.loser();
    }
    
  }

  winner = (newArray) => {
    this.setState({ 
      score: this.state.score + 1 ,
      characters: this.shuffleImage(newArray)
    })
    
  }

  loser = () => {
    this.setState({ score: 0, chracters: [...friends], })
  }

  shuffleImage = (data) => {
    this.setState({
      chracters: data.sort(function (a, b) {
        return 0.5 - Math.random();
      })
    })

  }



















  render() {

    return (

      <Wrapper>
        <Title>The Clicky Game
          <br></br>   Try not to click the same image twice! <br></br>Score: {this.state.score}</Title>
        {this.state.chracters.map(friend => (
          <FriendCard
            imageClick={this.imageClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          // occupation={friend.occupation}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
