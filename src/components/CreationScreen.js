import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";
import { Height } from "@mui/icons-material";

const CreationScreen = (props) => {
  const [connections, setConnections] = useState(4);
  const [playHeight, setPlayHeight] = useState(6);
  const [playWidth, setPlayWidth] = useState(7);

  function setConnectionsValue(event, newValue) {
    setConnections(newValue);
  }

  function setHeight(event, newValue) {
    setPlayHeight(newValue);
  }

  function setWidth(event, newValue) {
    setPlayWidth(newValue);
  }

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
          orientation="vertical"
          onChange={setHeight}
          step={1}
          marks
          min={5}
          max={9}
        />
        <Slider
          id="horiSlider"
          sx={{
            width: "200px",
            color: "white",
            margin: "20px",
          }}
          value={playWidth}
          onChange={setWidth}
          step={1}
          marks
          min={5}
          max={9}
        />
      </div>
    </div>
  );
};

CreationScreen.propTypes = {};

export default CreationScreen;
