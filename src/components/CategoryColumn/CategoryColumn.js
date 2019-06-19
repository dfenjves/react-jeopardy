import React from "react";
import QuestionTile from '../QuestionTile/QuestionTile'
import CategoryTile from '../CategoryTile/CategoryTile'
import "./CategoryColumn.css"

function CategoryColumn(props){
  return(
    <div className="CategoryColumn">
      <CategoryTile text="New York Landmarks"/>
      <QuestionTile value="$100" questionText="In what year was Upperline Founded?"/>
      <QuestionTile value="$200" questionText="What does the H stand for in HTML?"/>
      <QuestionTile value="$300" questionText="How do you write a function in Javascript?"/>
      <QuestionTile value="$400" questionText="What is Danny's Dog's Name?"/>
      <QuestionTile value="$500" questionText="Upperline is the name of a street in which city?"/>
    </div>

  )
}

export default CategoryColumn
