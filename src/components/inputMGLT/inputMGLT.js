import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputMGLT.css';

class InputMGLT extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div className='area-form-mglt'>
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
