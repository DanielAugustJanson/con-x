import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { Height } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { functionTypeAnnotation } from "@babel/types";
import "./CreationScreen.css";

const CreationScreen = (props) => {
  const [connections, setConnections] = useState(4);
  const [playHeight, setPlayHeight] = useState(6);
  const [playWidth, setPlayWidth] = useState(7);
  const [gameStated, toggleGameStarted] = useState(false);

  function toggleGame() {
    toggleGameStarted(!gameStated);
  }

  function setConnectionsValue(event, newValue) {
    setConnections(newValue);
  }

  function setHeight(event, newValue) {
    setPlayHeight(newValue);
  }

  function setWidth(event, newValue) {
    setPlayWidth(newValue);
  }

  function checkStartConditions() {
    if (connections > playHeight || connections > playWidth) {
      window.alert("Game size cannot be smaller than connections");
    } else {
      toggleGameStarted(true);
      //Game manager goes here?
    }
  }

  function displayGame() {
    if (!gameStated) {
      return (
        <div className="playBox">
          <div className="connectionBox">
            <h2 id="connectionDisplay">{connections}</h2>
            <h3>Connections for victory</h3>
            <Slider
              sx={{
                width: "200px",
                color: "white",
                margin: "20px",
              }}
              defaultValue={connections}
              onChange={setConnectionsValue}
              step={1}
              marks
              min={3}
              max={6}
            />
          </div>
          <div className="gameSizeBox">
            <h3 id="sizeDisplay">
              {playHeight} x {playWidth}
            </h3>
            <Slider
              id="vertSlider"
              sx={{
                height: "200px",
                color: "white",
                margin: "20px",
              }}
              value={playHeight}
              defaultValue={connections + 1}
              orientation="vertical"
              onChange={setHeight}
              step={1}
              marks
              min={connections}
              max={9}
            />
            <Slider
              id="horiSlider"
              sx={{
                width: "200px",
                color: "white",
                margin: "20px",
              }}
              defaultValue={connections + 1}
              value={playWidth}
              onChange={setWidth}
              step={1}
              marks
              min={5}
              max={9}
            />
          </div>
          <div>
            <Button variant="outlined"
            onClick={checkStartConditions}
            >Start</Button>
          </div>
        </div>
      );
    }else{
      return <p>Started Game</p>;
    }
  }

  return(displayGame());
};

CreationScreen.propTypes = {};

export default CreationScreen;
