import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './starshipCard.css';

class StarshipCard extends Component {
  render() {
    const starWarsPallete = [
      '#100f14', '#3d3336', '#4c596f', '#ab856e', '#698fba', '#bbc9da'
    ];
    const color = starWarsPallete[Math.floor(Math.random() * 6)];
    const { data: starship } = this.props;
    const urlImage = starship.img_name;

    return (
      <div className='starship'>
        <div className='box box-text'>
          <p className='title'> {starship.name} </p>
          <p className='stops'> {Math.floor(starship.stops)} stops </p>
          <span className='property'> {starship.model} </span>
          <span className='property'> {starship.length} </span>
          <span className='property'> {starship.MGLT} MGLT/h </span>
          <span className='property'> Support {starship.cargo_capacity} Kgs </span>
        </div>
        <div className='box box-image' style={{ backgroundImage: `url(/images/${urlImage}.png)` }}>
        </div>
      </div >
    );
  }
}

StarshipCard.propTypes = {
  data: PropTypes.object,
};

export default StarshipCard;
