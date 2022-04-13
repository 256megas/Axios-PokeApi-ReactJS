import React, { Component } from "react";
import axios from "axios";
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [] };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/dragonite")
      .then((res) => {
        console.log(res);
        this.setState({ pokemon: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Poke App</h1>
        <hr />
        <h2>{this.state.pokemon.name}</h2>
        <h2>{this.state.pokemon.id}</h2>
        <h2>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              this.state.pokemon.id +
              ".png"
            }
            alt={this.state.pokemon.name}
          />
        </h2>
      </div>
    );
  }
}

export default HomeContainer;
