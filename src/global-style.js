import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./index";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

  body {
    background: ${props => (props.theme === "light" ? "#ffffff" : "#000a12")};
    color: ${props => (props.theme === "light" ? "#1f1f1f" : "#eee")};
    font-family: "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial,
      sans-serif;
    padding: 2rem 3rem;
    line-height: 1.4;
    letter-spacing: 0.0167em;
  }
`;

class StyledTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <GlobalStyle {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}
StyledTheme.contextType = ThemeContext;

export default StyledTheme;
