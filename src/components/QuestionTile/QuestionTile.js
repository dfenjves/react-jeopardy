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
    fontSize: '3vw',
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
      modalIsOpen: false
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

  render(){
    return(
      <div className="QuestionTile" onClick={this.openModal}>
        <h2>{this.props.value}</h2>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="question">
            <p onClick={this.closeModal}>{this.props.questionText}</p>
          </div>
          <div className="answer">
            <input
             ref={(input) => { this.nameInput = input; }}
             style={{backgroundColor: 'blue', border: 'none', color: 'white', outline: 'none', fontSize: '0.6em'}}
             type="text"
            />
          </div>
        </Modal>
      </div>
    )
  }

}

export default QuestionTile;
