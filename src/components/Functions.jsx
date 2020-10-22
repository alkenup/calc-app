import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({ onContentClear, onDelete }) => (
  <section className="functions">
    <Button text = "clear" clickHandler = { onContentClear } type="button-long-text"/>
    <Button text = "&larr;" clickHandler = { onDelete }/>
  </section>
)

Functions.propType = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Functions