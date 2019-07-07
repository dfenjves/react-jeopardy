import React from "react"
import CategoryColumn from "../CategoryColumn/CategoryColumn"
import "./GameBoard.css"

class GameBoard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver:false,
      pointsUsed:0,
      score:0
    }
  }

  updateScore=(pointsToAdd)=>{
    this.setState((previousState)=>({score: previousState.score + pointsToAdd}))
  }

  render(){
    return(
      <div className="GameBoard">
        <CategoryColumn updateScore={this.updateScore}/>
        <CategoryColumn updateScore={this.updateScore}/>
        <CategoryColumn updateScore={this.updateScore}/>
        <CategoryColumn updateScore={this.updateScore}/>
        <CategoryColumn updateScore={this.updateScore}/>
        <h1 style={{color: 'white'}}>{`Score: $${this.state.score}`}</h1>
      </div>
    )
  }
}

export default GameBoard;
