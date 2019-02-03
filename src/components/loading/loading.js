import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <div className='loading-img' style={{ backgroundImage: `url(/images/loading.gif)` }}>
        </div>
      </div>
    );
  }
}

export default Loading;
