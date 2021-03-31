import React, { Component } from "react";

const Question = (props) => {
  return (
    <div>
      <h2>Preguntas</h2>
      <div>
        <p>{props.QuestionsData.question}</p>
      </div>
      <div>
        <button
          disabled={props.disabled}
          className={props.buttonClass[0]}
          onClick={() => props.onPress(props.QuestionsData.correctAnswer, 0)}
        >
          {props.QuestionsData.answers[0]}
        </button>
        <button
          disabled={props.disabled}
          className={props.buttonClass[1]}
          onClick={() => props.onPress(props.QuestionsData.correctAnswer, 1)}
        >
          {props.QuestionsData.answers[1]}
        </button>
        <br />
        <button
          disabled={props.disabled}
          className={props.buttonClass[2]}
          onClick={() => props.onPress(props.QuestionsData.correctAnswer, 2)}
        >
          {props.QuestionsData.answers[2]}
        </button>
        <button
          disabled={props.disabled}
          className={props.buttonClass[3]}
          onClick={() => props.onPress(props.QuestionsData.correctAnswer, 3)}
        >
          {props.QuestionsData.answers[3]}
        </button>
      </div>
    </div>
  );
};

export default Question;
