// eslint-disable-next-line no-unused-vars

import Layout from "./LayoutGenerator"


class GameMangager{
    constructor(){

        this.gameStates = {
            0: "idle",
            1: "onGoing",
            2: "finished"
        }

        this.turns = {
            0: "locked",
            1: "player1",
            2: "player2"
        }

        this.outcomes = {
            0: null,
            1: "player1",
            2: "player2",
            3: "draw"
        }

        this.connections = null;
        this.playArea = null;
        this.maxMoves = null
        this.layout = null;

        this.move = 0;
        this.gameState = this.gameStates[0]
        this.turn = this.turns[0]
        this.outcome = this.outcomes[0]
        this.outPut= null;

        
    }

    startGame(){
        this.gameState = this.gameStates[1]
        this.turn = this.turns[1]
    }

    restartGame(){
        this.connections = null
        this.playArea = null;
        this.maxMoves = null
        this.move = 0;
        this.gameState = this.gameStates[0]
        this.turn = this.turns[0]
        this.outcome = this.outcomes[0]
    }

    setGameState(state){
        this.gameState = this.gameStates[state]
    }
    setGameOutcome(state){
        this.outCome = this.outcomes[state]
    }

    /* Switches between player 1 and 2, sets to locked by default if no value is given */ 
    swithcPlayerTurn(){
        switch(this.turn){
            case(1):
                this.turn = this.turns[2]
                break;
            case(2):
                this.turn = this.turns[1]
                break;
            default:
                this.turn = this.turns[0]
        }
    }

    createGameArea(){
        /* creates the game are based on values
        
        * check that game area is valid compared to the amount of connects neccesary
        
        * Sets game state to Ongoing

        * Sets turn for player
        
        */
    }

    checkWinConditions(){
        /* Checks for the game */
    }

}

export default GameMangager;