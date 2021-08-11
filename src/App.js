import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteCreation from "./components/NoteCreation";
import Note from "./components/Note";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      para: "",
      buttonStat: false, //passed to <NoteCreation /> and after that <Note /> through buttonChangeHandler
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleParaChange = this.handleParaChange.bind(this);
    this.handleButtonChange = this.handleButtonChange.bind(this);
  }

  handleButtonChange() {
    this.setState((prevState) => {
      return {
        buttonStat: !prevState.buttonStat,
      };
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event
    });
  }

  handleParaChange(event) {
    this.setState({
      para: event
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <NoteCreation
          handleTitleChange={this.handleTitleChange}
          handleParaChange={this.handleParaChange}
          title={this.state.title}
          para={this.state.para}
          handleButtonChange={this.handleButtonChange}
          buttonStat={this.state.buttonStat}
        />
        <br />
        <Note
          buttonStat={this.state.buttonStat}
          para={this.state.para}
          title={this.state.title}
          handleButtonChange={this.handleButtonChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
