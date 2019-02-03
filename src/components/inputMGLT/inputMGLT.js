import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputMGLT.css';

class InputMGLT extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div className='area-form-mglt'>
        <p>
          Insert the number, click in 'Calculate' or press Enter.
          The default number is 50000.
        </p>
        <div className='box-mglt'>
          <input className='item input-mglt' type='number' onChange={handleChange} />
          <button className='item button-mglt' onClick={handleSubmit}> Calculate </button>
        </div>
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
