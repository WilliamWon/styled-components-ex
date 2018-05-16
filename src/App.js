// IMPORT DEPENDENCIES
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
// IMPORT STYLED COMPONENTS
import CTA from "./components/CTA";
import Button from "./components/Button";
import Input from "./components/Input";
// THEMES
const theme1 = {
  font: "Helvetica",
  primaryColor: "salmon",
  secondaryColor: "darkblue",
  altColor: "paleturquoise",
  dark: "#222",
  weirdColor: "papayawhip",
  whatever: "palevioletred"
};
const theme2 = {
  font: "Arial",
  primaryColor: "yellow",
  secondaryColor: "grey",
  altColor: "cyan",
  dark: "#000",
  weirdColor: "purple",
  whatever: "magenta"
};
// STYLED COMPONENTS
const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.dark};
  text-align: center;

  @media (max-width: 768px) {
    background-color: mediumseagreen;
  }
`;
const Header = styled.div`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.altColor};
`;
const Title = styled.h1`
  margin: 0;
  font-size: ${props => (props.subtitle ? "25px" : "50px")};
  color: ${props =>
    props.subtitle ? props.theme.secondaryColor : props.theme.primaryColor};
  ${props => props.underlined && "text-decoration: underline;"};
`;
const Content = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.p`
  margin: 0;
  color: white;
`;

// CLASS COMPONENT
class App extends Component {
  constructor(props) {
    super(props);

    // COMPONENT STATE
    this.state = {
      theme1: true
    };
  }
  swapTheme() {
    this.setState({ theme1: !this.state.theme1 });
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme1 ? theme1 : theme2}>
        <AppWrapper>
          <Header>
            <Title underlined>This is a Title</Title>
            <Title subtitle>This is a Subtitle</Title>
          </Header>
          <Content>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Paragraph>
            <Input type="number" />
          </Content>
          <CTA>
            <Button positive large onClick={() => this.swapTheme()}>
              YAS
            </Button>
            <Button>Maybe?</Button>
            <Button negative>NO</Button>
          </CTA>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

// EXPORT COMPONENT
export default App;
