import React from "react";
import QuestionTile from '../QuestionTile/QuestionTile'
import CategoryTile from '../CategoryTile/CategoryTile'
import "./CategoryColumn.css"

function CategoryColumn(props){
  return(
    <div className="CategoryColumn">
      <CategoryTile text={props.data[0].category.title}/>
      {props.data.map( item => <QuestionTile value={item.value} questionText={item.question} answer={item.answer} updateScore={props.updateScore}/>)}
    </div>

  )
}

export default CategoryColumn
