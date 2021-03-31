import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import moment from "moment";

const Scores = (props) => {
  return (
    <div className="container">
      {props.props.location.rightAnswers == undefined ? (
        <Redirect to="/" />
      ) : (
        <div className="center">
          <h2>Respuestas Correctas: {props.location.rightAnswers}</h2>
          <h2>Respuestas incorrectas: {props.location.wrongAnswers}</h2>
          <br />
          <br></br>
          <h2>
            Tiempo Transcurrido:{" "}
            {moment
              .utc(
                moment(props.location.newDate, "DD/MM/YYYY HH:mm:ss").diff(
                  moment(props.location.oldDate, "DD/MM/YYYY HH:mm:ss")
                )
              )
              .format("HH:mm:ss")}
          </h2>
          <NavLink to="/">Volver a inicio</NavLink>
        </div>
      )}
    </div>
  );
};

export default Scores;
