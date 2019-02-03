import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputMGLT.css';

class InputMGLT extends Component {

  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <label>
          <input id='mglt' type="number" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}> testy </button>
      </div>
    );
  }
}

InputMGLT.propTypes = {
  mglt: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default InputMGLT;
