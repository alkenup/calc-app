import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ text, type, clickHandler }) => (
  <button className={ type } onClick={() =>clickHandler(text)}>
    <span>{ text }</span>
  </button>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

Button.defaultProps = {
  type: "number",
  clickHandler: text => {
    console.log("implements click handler");
  }
}

export default Button;