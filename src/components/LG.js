import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./LG.css";
import { Button } from "@mui/material";
import AI from "./AI"


//LayoutGenerator

const LG = (props, { onEnd }) => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameTurn, setGameTurn] = useState(1);
  const height = props.layout[0];
  const width = props.layout[1];
  const connections = props.layout[2];
  const maxTurns = props.layout[0] * props.layout[1];
  const aiEnabled = props.layout[3];

  const ai = AI()



///////////////////// AI Move integration

  const handleAiMove = (col) => {
  const row = getBottomEmptyRow(col);
  if (row !== -1 && !winner && gameTurn < maxTurns) {
    const updatedGridState = [...gridState];
    updatedGridState[col][row] = playerTurn === 1 ? 'red' : 'blue';
    setGridState(updatedGridState);
    togglePlayerTurns();
    const hasWon = checkWin(updatedGridState, playerTurn === 1 ? 'red' : 'blue', connections);
    if (hasWon) {
      setWinner(playerTurn);
    } else if (gameTurn === maxTurns - 1) {
      setWinner('draw');
    }
    setGameTurn(gameTurn + 1);
  }
};

  // AI Move
  useEffect(() => {
    if (aiEnabled && playerTurn === 2) {
      console.log("Use Effect Working, AI's turn");
      makeAiMove();
    }
  }, [aiEnabled, playerTurn]);
  
  const makeAiMove = () => {
    if (playerTurn === 2) {
      const bestMove = ai.getBestMove(gridState, playerTurn, 0);
      console.log("makeAiMove function called");
      console.log(bestMove);
      handleAiMove(bestMove);
    }
  };

  
///////////////////////////////////

  const gridStateInitial = Array(width)
    .fill()
    .map(() => Array(height).fill(""));

  const [gridState, setGridState] = useState(gridStateInitial);
  const [winner, setWinner] = useState(null);
  


  const togglePlayerTurns = () => {
    if (playerTurn === 1) {
      setPlayerTurn(2);
    } else if (playerTurn === 2) {
      setPlayerTurn(1);
    }
  };

  

// Handle Next Move

const handleCellClick = (col) => {
  if (!aiEnabled || (aiEnabled && playerTurn === 1)) {
    const row = getBottomEmptyRow(col);
    if (row !== -1 && !winner && gameTurn < maxTurns) {
      const updatedGridState = [...gridState];
      updatedGridState[col][row] = playerTurn === 1 ? 'red' : 'blue';
      setGridState(updatedGridState);
      togglePlayerTurns();
      const hasWon = checkWin(updatedGridState, playerTurn === 1 ? 'red' : 'blue', connections);
      if (hasWon) {
        setWinner(playerTurn);
      } else if (gameTurn === maxTurns - 1) {
        // Adjusted the condition to consider the current move
        setWinner('draw');
      }
      setGameTurn(gameTurn + 1);
    }
  }
};


const getBottomEmptyRow = (col) => {
  // Check if gridState[col] exists
  if (gridState[col]) {
      for (let i = 0; i < height; i++) {
          if (gridState[col][i] === "") {
              return i;
          }
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



  ///Layout Generator//////////////////////////////////////////////////////////////////////////////////

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


  //GameRestult Message
  

  const GameResult = () => {
    let message = "";
    if (winner === 1 || winner === 2) {
      message = `Player ${winner} wins in ${gameTurn} moves!`;
    } else if (winner === "draw") {
      message = "It's a draw!";
    }

    function RestartGame(){
      props.onGameEnd()
    }


    return (
      <div className="game-result-bg">
        <div className="game-result-box">
          <h3>{message}</h3>
          
          <Button variant="outlined" 
          onClick={RestartGame}>Restart</Button>
        </div>
      </div>
    );
  };

  return (
    <>
      {generateLayout()}
      {winner && <GameResult />}
    </>
  );
};

LG.propTypes = {};

export default LG;