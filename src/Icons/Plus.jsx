import React from "react";
import "font-awesome/css/font-awesome.min.css";

class Plus extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleButtonChange();
  }

  render() {
    return (
      <div>
        <i
          className="fa fa-plus fa-2x"
          onClick={() => {
            this.handleClick();
            this.props.handlePlusClick()
          }}
        ></i>
      </div>
    );
  }
}

export default Plus;
