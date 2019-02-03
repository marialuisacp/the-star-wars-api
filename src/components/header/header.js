

import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='logo'>
          <img src='/images/logo-custom.png' />
        </div>
        <div className='subtitle'>
          <p>  Web Application to calculate pitstops of a starship by MGLT </p>
          <p> Developed and designed by <a href='http://dcc.ufmg.br/~maria.luisa' target='_blank'>@marialuisacp</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
