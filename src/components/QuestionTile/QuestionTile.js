import React from "react";
import Modal from 'react-modal';
import "./QuestionTile.css";


const customStyles = {
  content : {
    top : '25%',
    left : '25%',
    width: '30%',
    height: '40%',
    transition : 'transform 1s',
    padding : '0',
    display: 'grid',
    gridTemplateRows: '3fr 1fr',
    backgroundColor: 'blue',
    color: 'white',
    textShadow: '2px 2px #000000',
    fontSize: '2em',
    textTransform: 'uppercase',
    padding: '5% 10%',
    textAlign: 'center',
    fontFamily: "'Merriweather', sans-serif",
    fontWeight: '700',
  }
};

class QuestionTile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
      modalIsOpen: false,
      answered: null
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    //conditional style to zoom in -- open modal first, then zoom.
    customStyles.content.transform ='scale(2)'
    this.nameInput.focus()

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleKeyDown(e, answer){
    if(e.key === 'Enter'){
      if(e.target.value.toLowerCase() == answer.toLowerCase()){
        this.props.updateScore(this.props.value)
        this.setState({answered: "correct"}, () => setTimeout(this.closeModal,2000))
      }else{
        this.props.updateScore(-this.props.value)
        this.setState({answered: "incorrect"}, () => setTimeout(this.closeModal,2000))
      }
    }
  }

  render(){
    return(
      <div className="QuestionTile" onClick={ this.state.answered ? '' : this.openModal}>
        <h2 style={{display: this.state.answered ? 'none': ''}}>{`$${this.props.value}`}</h2>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="question" style={{ display: this.state.answered ? 'none' : '' }}>
            <p onClick={this.closeModal}>{this.props.questionText}</p>
          </div>
          <img src = {this.state.answered=="correct" ? 'https://media.giphy.com/media/EQnKFGTw418nqpytB9/giphy.gif' : 'https://media.giphy.com/media/25EAueTny5f3MKbVRo/giphy.gif' } style={{ display: this.state.answered ? '' : 'none' }}/>
          <div className="answer">
            <input
             onKeyDown = {(e)=>this.handleKeyDown(e,this.props.answer)}
             ref={(input) => { this.nameInput = input; }}
             style={{display: this.state.answered=="incorrect" ? 'none' : '', backgroundColor: 'blue', border: 'none', color: 'white', outline: 'none', fontSize: '0.6em'}}
             type="text"
            />
            <p style={{display: this.state.answered=="incorrect"? '' : 'none', color: 'white'}}>{`incorrect! the answer is ${this.props.answer}`}</p>
          </div>
        </Modal>
      </div>
    )
  }

}

export default QuestionTile;
