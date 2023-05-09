class GameMangager{
    constructor(height,width, connections){
        this.connections = connections
        this.playArea = [height,width]

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

        this.gameState = this.gameStates[0]
        this.turn = this.turns[0]

    }

}