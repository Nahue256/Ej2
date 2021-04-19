import React, { Component } from "react";
import Question from "./question";
import { NavLink, Redirect, Route } from "react-router-dom";
import QuestionsData from "./data/data";

class Questions extends Component {
  state = {
    currentTime: null,
    wrongAnswers: 0,
    rightAnswers: 0,
    answeredQuestions: [],
    index: 0,
    questionArray: this.props.location.array,
    buttonClasses: [
      "btn btn-light",
      "btn btn-light",
      "btn btn-light",
      "btn btn-light",
    ],
    buttonsDisabled: false,
  };

  UpdateButtons = () => {
    var buttonsDisabled = this.state.buttonsDisabled;
    buttonsDisabled == true
      ? (buttonsDisabled = false)
      : (buttonsDisabled = true);
    this.setState({ buttonsDisabled });
  };

  ResetButtonClaseses = () => {
    var buttonClasses = this.state.buttonClasses;
    buttonClasses = [
      "btn btn-light",
      "btn btn-light",
      "btn btn-light",
      "btn btn-light",
    ];
    this.setState({ buttonClasses });
  };

  UpdateButtonClasses = (value, button) => {
    var buttonClasses = this.state.buttonClasses;
    if (value == button) {
      buttonClasses[button] = "btn btn-success";
      this.setState({ buttonClasses });
    } else {
      buttonClasses[button] = "btn btn-danger";
      this.setState({ buttonClasses });
    }
  };

  IncrementIndex = () => {
    this.UpdateButtons();
    this.ResetButtonClaseses();
    if (this.state.answeredQuestions.length < 20) {
      var index = this.state.index + 1;
      this.setState({ index });
    }
  };

  RenderNextQuestion = () => {
    if (
      this.state.answeredQuestions.length < 20 &&
      this.state.answeredQuestions[this.state.index] != null
    ) {
      return (
        <a onClick={this.IncrementIndex} className="link-primary">
          Proxima pregunta!
        </a>
      );
    }
  };

  RenderScores = () => {
    if (this.state.answeredQuestions.length > 19) {
      return (
        <NavLink
          to={{
            pathname: "/scores/",
            rightAnswers: this.state.rightAnswers,
            wrongAnswers: this.state.wrongAnswers,
            oldDate: this.state.currentTime,
            newDate: this.CalculateTime(),
          }}
        >
          Ver Resultados
        </NavLink>
      );
    }
  };

  HandlePress = (value, button) => {
    this.SetTime();
    var rightAnswers = this.state.rightAnswers;
    var wrongAnswers = this.state.wrongAnswers;
    this.UpdateButtonClasses(value, button);

    ({ rightAnswers, wrongAnswers } = this.IncrementAnswerCounter(
      value,
      button,
      rightAnswers,
      wrongAnswers
    ));

    this.UpdateButtons(true);
    this.SaveQuestion();
  };

  SaveQuestion = () => {
    var answeredQuestions = this.state.answeredQuestions;
    answeredQuestions.push(this.props.match.params.id);
    this.setState({ answeredQuestions });
  };

  IncrementAnswerCounter(value, button, rightAnswers, wrongAnswers) {
    if (value == button) {
      window.alert("Respuesta correcta!");
      rightAnswers = rightAnswers + 1;
      this.setState({ rightAnswers });
    } else {
      window.alert("Respuesta incorrecta!");
      wrongAnswers = wrongAnswers + 1;
      this.setState({ wrongAnswers });
    }
    return { rightAnswers, wrongAnswers };
  }

  CalculateTime = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  };

  SetTime = () => {
    if (this.state.currentTime == null) {
      var currentTime = this.state.currentTime;
      currentTime = this.CalculateTime();
      this.setState({ currentTime });
    }
  };

  ValidateArray = () => {
    var bool;
    var bool = this.state.questionArray == null ? true : false;
    return bool;
  };

  render() {
    return (
      <div className="container">
        <div className="center p-4">
          {console.log(this.state.currentTime)}
          <h3>{this.state.index + 1} / 20</h3>
          {this.ValidateArray() ? (
            <Redirect to="/" />
          ) : (
            <Question
              buttonClass={this.state.buttonClasses}
              disabled={this.state.buttonsDisabled}
              props={this.props}
              onPress={this.HandlePress}
              QuestionsData={
                QuestionsData[this.state.questionArray[this.state.index]]
              }
            />
          )}

          <NavLink to="/">Inicio</NavLink>
          <br />
          {this.RenderScores()}
          <br />
          {this.RenderNextQuestion()}
        </div>
      </div>
    );
  }
}

export default Questions;
