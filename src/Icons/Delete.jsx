import React from "react";
import "font-awesome/css/font-awesome.min.css";

class Delete extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <i
          className="fa fa-trash fa-2x"
          onClick={() => {
            console.log("Delete Button Pressed");
            this.props.handleDeleteButton(this.props.ID);
          }}
        ></i>
      </div>
    );
  }
}

export default Delete;
