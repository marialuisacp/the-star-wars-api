import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './starshipCard.css';

class StarshipCard extends Component {
  render() {
    const { data: starship } = this.props;
    return (
      <div className='starship'>
        <p className='title'> {starship.name} </p>
        <p className='stops'> {Math.floor(starship.stops)} stops </p>
        <span className='property'> {starship.model} </span>
        <span className='property'> {starship.length} </span>
        <span className='property'> {starship.MGLT} MGLT/h </span>
        <span className='property'> Support {starship.cargo_capacity} Kgs </span>
      </div>
    );
  }
}

StarshipCard.propTypes = {
  data: PropTypes.object,
};

export default StarshipCard;
