import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarshipCard from '../card/starshipCard';
import './starshipsList.css';

class StarshipsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      starships: [],
      mgltTotal: 0
    };
  }

  render() {
    const { starships: getStarships } = this.props;
    const starships = getStarships();
    return (
      <div className='starship-list'>
        {starships && starships.length > 0
          && starships.map((starship) => {
            return <StarshipCard key={starship.name} data={starship}></StarshipCard>
          })
        }
      </div>
    );
  }
}

StarshipsList.propTypes = {
  mglt: PropTypes.Integer,
  starships: PropTypes.func,
};

export default StarshipsList;
