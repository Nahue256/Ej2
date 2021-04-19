import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
  state = {
    name: "",
    lastName: "",
    submitted: false,
    arrayQuestions: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
    ],
  };

  styles = {
    backgroundColor: "black",
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.ValidateData(this.state.name, this.state.lastName)) {
      alert("Nombre y apellido enviado");
      this.setState({ submitted: true });
    } else {
      alert("Nombre y apellido no validos");
    }
  };

  ValidateData(nombre, apellido) {
    if (nombre.length > 10 || nombre.length < 1) return false;
    if (apellido.length > 10 || apellido.length < 1) return false;
    return true;
  }

  generateArray = () => {
    var array = this.state.arrayQuestions;
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleGame = () => {
    if (this.state.submitted) {
      var array = this.generateArray();
      return (
        <NavLink to={{ pathname: "/game/" + array[0], array: array }}>
          Ir al juego!
        </NavLink>
      );
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1>Quiz de videojuegos</h1>
        </div>

        <form className="center" onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div>
            <label>Apellido: </label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastName}
            />
          </div>
          <button type="submit">Enviar</button>
          {this.handleGame()}
        </form>
      </div>
    );
  }
}

export default HomePage;
