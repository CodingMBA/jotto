import React from 'react'
import PropTypes from 'prop-types'


/**
 * Functional react component for congratulatory message
 * @function
 * @params {object} props - React.props from App component
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is present)
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats"/>
    )
  }

  
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
