import React from "react";
import "./QuestionTile.css";

class QuestionTile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    }
  }


  render(){
    return(
      <div className="QuestionTile">
        <h2>{this.props.value}</h2>
      </div>
    )
  }

}

export default QuestionTile;
