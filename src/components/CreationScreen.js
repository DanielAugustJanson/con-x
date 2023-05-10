import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

const CreationScreen = (props) => {
  const [connections, setConnections] = useState(4);
  const [playHeight, setPlayHeight] = useState(6);
  const [playWidth, setPlayWidth] = useState(7);

  function setConnectionsValue(event, newValue) {
    setConnections(newValue);
  }

  return (
    <div className="playBox">
      <div className="connectionBox">
        <h2 id="connectionDisplay">{connections}</h2>
        <h3>Connections for victory</h3>

        <Slider
          sx={{
            width: "300px",
            color: "white",
            margin: "20px"
          }}
          defaultValue={connections}
          onChange={setConnectionsValue}
          step={1}
          marks
          min={3}
          max={6}
        />
      </div>
    </div>
  );
};

CreationScreen.propTypes = {};

export default CreationScreen;
