// IMPORT DEPENDENCIES
import React, { Component } from "react";
import styled from "styled-components";

// STYLED COMPONENTS
const PasswordBox = styled.input.attrs({
  type: "password",
  className: "example"
})`
  background: white;
  color: red;
  padding: 5px;
  width: 300px;
  margin-top: 20px;
`;

// CLASS COMPONENT
class Input extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      text: "test"
    };
  }
  handlechange(val) {
    this.setState({ text: val });
  }
  render() {
    return (
      <PasswordBox
        value={this.state.text}
        onChange={e => this.handlechange(e.target.value)}
      />
    );
  }
}

// EXPORT COMPONENT
export default Input;
