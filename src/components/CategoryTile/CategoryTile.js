import React from "react";
import "./CategoryTile.css";

class CategoryTile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    }
  }

  render(){
    return(
      <div className="CategoryTile">
        <h2>{this.props.text}</h2>
      </div>
    )
  }

}

export default CategoryTile;
