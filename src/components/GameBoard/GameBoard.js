import React from "react"
import CategoryColumn from "../CategoryColumn/CategoryColumn"
import "./GameBoard.css"

class GameBoard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      gameOver:false,
      pointsUsed:0
    }
  }

  render(){
    return(
      <div className="GameBoard">
        <CategoryColumn />
        <CategoryColumn />
        <CategoryColumn />
        <CategoryColumn />
        <CategoryColumn />
      </div>
    )
  }
}

export default GameBoard;
