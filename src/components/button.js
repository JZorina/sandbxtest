import React, { Component } from "react";
import styled from "styled-components";
import { ThemeContext } from "../index";
import {
  blue50,
  blue100,
  blue700,
  blue800,
  yellow50,
  yellow100,
  yellow800,
  yellow900,
  red50,
  red100,
  red800,
  red900,
  gray900,
  gray800,
  gray200,
  gray100
} from "../styles/colors";

const ButtonStyled = styled.button`
  border-radius: 3px;
  border: none;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.0257em;
  cursor: pointer;
  background: ${props => (props.theme === "light" ? blue50 : blue700)};
  color: ${props => (props.theme === "light" ? gray900 : gray100)};
  outline: none;
  padding: 0.75rem 2rem;
  margin: 0.5rem;
  text-transform: uppercase;
  transition: background 0.1s;

  &:hover {
    background: ${props => (props.theme === "light" ? blue100 : blue800)};
  }

  &.primary {
    &:hover {
      background: ${props => (props.theme === "light" ? blue100 : blue800)};
    }
  }

  &.secondary {
    background: ${props => (props.theme === "light" ? yellow50 : yellow800)};
    color: #1f1f1f;
    &:hover {
      background: ${props => (props.theme === "light" ? yellow100 : yellow900)};
    }
  }

  &.warn {
    background: ${props => (props.theme === "light" ? red50 : red800)};
    &:hover {
      background: ${props => (props.theme === "light" ? red100 : red900)};
    }
  }

  &.disabled {
    background: ${props => (props.theme === "light" ? gray200 : gray800)};
    cursor: not-allowed;
    &:hover {
      background: ${props => (props.theme === "light" ? gray200 : gray800)};
    }
  }
`;

class Button extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <ButtonStyled {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}
Button.contextType = ThemeContext;

export default Button;
