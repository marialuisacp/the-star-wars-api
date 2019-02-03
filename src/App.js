import React, { Component } from 'react';
import Home from './screens/home/home';

class App extends Component {
  render() {
    return (
      <div className='all-page' style={{ backgroundImage: `url(/images/space.png` }}>
        <Home> </Home>
      </div>
    );
  }
}

export default App;
