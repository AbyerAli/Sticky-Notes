import React from "react";
import Delete from "../../Icons/Delete";

class StickyNote extends React.Component {
  constructor() {
    super();
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  handleDeleteButton(id) {
    this.props.handleStickyNoteDelete(id);
  }

  render() {
    return (
      <div className="sticky-note">
        <input defaultValue={this.props.title} />
        <br />
        <textarea defaultValue={this.props.para} />
        <br />
        <br />
        <Delete
          handleDeleteButton={this.handleDeleteButton}
          ID={this.props.ID}
        />
      </div>
    );
  }
}

export default StickyNote;
