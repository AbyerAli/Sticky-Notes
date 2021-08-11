import React from "react";
import Plus from "../Icons/Plus";

class NoteCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "",
      titleValue: "",
    };
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handlekeyDown = this.handlekeyDown.bind(this);
  }

  handlePlusClick() {
    this.props.handleTitleChange(this.state.titleValue);
    this.props.handleParaChange(this.state.textAreaValue);
    this.setState({
      textAreaValue: "",
      titleValue: "",
    });
  }

  handlekeyDown(event){
    if(event.key === 'enter'){
      console.log('Enter Pressed');
    }
  }

  render() {
    return (
      <div className="note-creation">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => {
              this.setState({
                titleValue: event.target.value,
              });
            }}
            value={this.state.titleValue}
            onKeyDown={this.handlekeyDown}
          />
          <textarea
            name=""
            placeholder="Write a note.."
            autoComplete="off"
            onChange={(event) => {
              this.setState({
                textAreaValue: event.target.value,
              });
            }}
            value={this.state.textAreaValue}

          ></textarea>
          <Plus
            handleButtonChange={this.props.handleButtonChange}
            handlePlusClick={this.handlePlusClick}
          />
        </form>
      </div>
    );
  }
}

export default NoteCreation;
