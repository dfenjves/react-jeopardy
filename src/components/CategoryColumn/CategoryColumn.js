import React from "react";
import QuestionTile from '../QuestionTile/QuestionTile'
import CategoryTile from '../CategoryTile/CategoryTile'
import "./CategoryColumn.css"

function CategoryColumn(props){
  return(
    <div className="CategoryColumn">
      <CategoryTile text="New York Landmarks"/>
      <QuestionTile value="$100"/>
      <QuestionTile value="$200"/>
      <QuestionTile value="$300"/>
      <QuestionTile value="$400"/>
      <QuestionTile value="$500"/>
    </div>

  )
}

export default CategoryColumn
