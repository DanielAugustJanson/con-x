import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LG.css";

const LG = (props) => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameTurn, setGameTurn] = useState(1);
  const height = props.layout[0];
  const width = props.layout[1];
  const connections = props.layout[2];
  const maxTurns = props.layout[0] * props.layout[1];

  //Grid Control  WIDTH - COL HEIGHT - ROW
  const gridStateInitial = Array(width)
    .fill()
    .map(() => Array(height).fill(""));

  const [gridState, setGridState] = useState(gridStateInitial);

  //////////////////////////////////////////////////////////////

  const togglePlayerTurns = () => {
    if (playerTurn == 1) {
      setPlayerTurn(2);
    }
    if (playerTurn == 2) {
      setPlayerTurn(1);
    }
  };

  //////////////////////////////////////////////////////////

  const handleCellClick = (col) => {
    const row = getBottomEmptyRow(col);
    if (row !== -1) {
      const updatedGridState = [...gridState];
      updatedGridState[col][row] = playerTurn === 1 ? "red" : "blue";
      setGridState(updatedGridState);
      togglePlayerTurns();
      setGameTurn(gameTurn + 1);
      const hasWon = checkWin(
        updatedGridState,
        playerTurn === 1 ? "red" : "blue",
        connections
      );
      if (hasWon) {
        window.alert(`Player ${playerTurn} wins!`);
      } else if (gameTurn === maxTurns) {
        window.alert("It's a draw!");
      }
    }
  };

  const getBottomEmptyRow = (col) => {
    for (let i = 0; i < height; i++) {
      if (gridState[col][i] === "") {
        return i;
      }
    }
    return -1; // Column is full
  };

  /////////////////////////////////////////////////////////// Chat GPT assisted Win conditions scan

  const checkWin = (grid, player, connections) => {
    const height = grid.length;
    const width = grid[0].length;

    // Check horizontally
    for (let row = 0; row < height; row++) {
      let count = 0;
      for (let col = 0; col < width; col++) {
        if (grid[row][col] === player) {
          count++;
          if (count === connections) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }

    // Check vertically
    for (let col = 0; col < width; col++) {
      let count = 0;
      for (let row = 0; row < height; row++) {
        if (grid[row][col] === player) {
          count++;
          if (count === connections) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }

    return false;
  };

  const generateLayout = () => {
    const grid = [];

    for (let col = 0; col < width; col++) {
      const rowCells = [];

      for (let row = 0; row < height; row++) {
        //Check the Array
        const cellColor = gridState[col][row];

        rowCells.push(
          <div className={`grid-cell ${cellColor}`} id={`${col}-${row}`}></div>
        );
      }
      grid.push(
        <div
          className="grid-col"
          key={col}
          onClick={() => handleCellClick(col)}
        >
          {rowCells}
        </div>
      );
    }

    return (
      <>
        <div className="grid">{grid}</div>
        <div className="gameScreen">
          It's player <strong>{playerTurn}</strong> turn
        </div>
      </>
    );
  };

  return generateLayout();
};

LG.propTypes = {};

export default LG;
