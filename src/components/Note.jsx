import React from "react";
import StickyNote from "./subComponents/StickyNote";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: 0,
      dataArray: [],
    };
    this.handleStickyNoteDelete = this.handleStickyNoteDelete.bind(this);
  }

  //________________Cheking for Button state if true then set it back to False
  componentDidMount() {
    if (this.props.buttonStat === true) {
      this.props.handleButtonChange();
    }
  }
  componentDidUpdate() {
    if (this.props.buttonStat === true) {
      this.props.handleButtonChange();
    }
  }
  //______________________________________________________________

  renderNotesToArray = () => {
    if (this.props.buttonStat === true) {
      const temp_obj = {
        id: this.state.ID,
        title: this.props.title,
        para: this.props.para,
      };

      this.setState((prevState) => {
        return {
          ID: prevState.ID + 1,
        };
      });
      this.state.dataArray.push(temp_obj);
    }
  };

  UNSAFE_componentWillReceiveProps(nexProps) {
    if (this.props.buttonStat === true) {
      this.renderNotesToArray();
    }
  }

  
  //======================== Handlers ==============================

  handleStickyNoteDelete(id) {
    console.log("handleStickyNoteDelete fired");

    this.setState((prevState) => {
      const updatedDataArray = prevState.dataArray.filter((mem) => {
        return mem.id !== id;
      });

      return {
        dataArray: updatedDataArray,
      };
    });
  }

  //================================================================

  render() {
    const stickyNoteArr = this.state.dataArray.map((mem) => {
      return (
        <StickyNote
          title={mem.title}
          para={mem.para}
          key={mem.id}
          ID={mem.id}
          handleStickyNoteDelete={this.handleStickyNoteDelete}
        />
      );
    });

    return (
      <div
        className="note"
        style={{
          display: this.state.ID === 0 ? "none" : "block",
        }}
      >
        <div className="stickyNote-container">{stickyNoteArr}</div>
      </div>
    );
  }
}

export default Note;
