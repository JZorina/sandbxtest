import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import StyledTheme from "./global-style";
import Button from "./components/button";
import { H1, H2, H3, P } from "./styles/typography";

const theme = "light";
export const ThemeContext = React.createContext(theme);

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === "dark" ? "light" : "dark"
      }));
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <StyledTheme />
        <div className="app">
          <Header>
            <Button className="primary" onClick={this.toggleTheme}>
              Switch Theme
            </Button>
            <p>
              Current theme: <em>{this.state.theme}</em>
            </p>
          </Header>
          <H1>H1 Roboto Bold</H1>
          <H2>H2 Roboto Bold</H2>
          <H3>H3 Roboto Bold</H3>
          <P>Paragraph Roboto Regular</P>
          <Button className="primary">Primary</Button>
          <Button className="secondary">Secondary</Button>
          <Button className="warn">Warning</Button>
          <Button className="disabled">Disabled</Button>
        </div>
      </ThemeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
