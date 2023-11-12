import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CS from './CS'
import LG from './LG'

//GameManager

const GM = props => {

    /* Gamestates 0 - Idle, 1 - Ongoing, 2 - Finished */
    const [gameState, setGameState] = useState(0)
    const [gameConditions, setGameConditions] = useState([0,0,0,0])
    let output;


    const onGameStart = (conditions) =>{
        setGameConditions(conditions)
        console.log(conditions)
        setGameState(1)
        
    }

    const onGameReset = () => {
        setGameState(0)
        setGameConditions([0,0,0])
    }

    switch(gameState){
        case(0):
            output = <CS onStart={onGameStart}></CS>
            console.log("Game state 0")
            break;
        case(1):
            output = <LG layout={gameConditions} onGameEnd={onGameReset} ></LG>;
            console.log("Game state 1")
            break;
        default:
            output = null;
            console.log("Game state default")
            break;
    }

  return (output)
}

GM.propTypes = {}

export default GM