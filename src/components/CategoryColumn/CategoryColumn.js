import React from "react";
import QuestionTile from '../QuestionTile/QuestionTile'
import CategoryTile from '../CategoryTile/CategoryTile'
import "./CategoryColumn.css"

function CategoryColumn(props){
  return(
    <div className="CategoryColumn">
      <CategoryTile text="New York Landmarks"/>
      <QuestionTile value={100} questionText="In what year was Upperline Founded?" answer="2015" updateScore={props.updateScore}/>
      <QuestionTile value={200} questionText="What does the H stand for in HTML?" answer="2015" updateScore={props.updateScore}/>
      <QuestionTile value={300} questionText="How do you write a function in Javascript?"answer="2015" updateScore={props.updateScore}/>
      <QuestionTile value={400} questionText="What is Danny's Dog's Name?"answer="2015" updateScore={props.updateScore}/>
      <QuestionTile value={500} questionText="Upperline is the name of a street in which city?"answer="2015" updateScore={props.updateScore}/>
    </div>

  )
}

export default CategoryColumn
