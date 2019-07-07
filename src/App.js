import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'

async function getData(){

}

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  getRandom5AndRemove(categories){
    console.log(categories)
    let random5 = []
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random()*categories.length)
      console.log(categories[randomIndex])
      random5.push(categories[randomIndex])
      categories.splice(randomIndex,1)
    }
    console.log(random5)
    return random5
  }

  componentDidMount(){
    fetch(`http://jservice.io/api/categories?count=100`)
    .then(data => data.json())
    .then(data => {
      let random5 = this.getRandom5AndRemove(data)
      Promise.all( [random5.map(result => fetch(`http://jservice.io/api/clues?category=${result.id}`)
        .then(d => d)
        .then(d => {
          return d.json()
        })
        .then(d => {
          this.setState((previousState) => ({data: [...previousState.data,d]}))
        })
      ) ] )
      .then( data => {

      })
      .catch( err => console.error(err))
    })
  }

  render(){
    console.log(this.state.data)
    return(
      <div className="App"><GameBoard data={this.state.data} /></div>
    )
  }
}

export default App;
