import styled from "styled-components";

export default styled.button`
  font-family: ${props => props.theme.font || "sans-serif"};
  font-size: ${props => (props.large ? "25px" : "12px")};
  border: none;
  outline: none;
  padding: ${props => (props.large ? "25px" : "12px")};
  color: ${props =>
    props.positive
      ? "green"
      : props.negative
        ? "red"
        : props.theme.whatever || "grey"};
  background-color: ${props =>
    props.positive
      ? "lightgreen"
      : props.negative
        ? "pink"
        : props.theme.weirdColor || "black"};

  &:hover {
    background: ${props => (props.positive ? "cyan" : "#F87")};
    color: white;
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
