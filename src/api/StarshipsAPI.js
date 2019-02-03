import { Component } from 'react';

class StarshipsAPI extends Component {
  getStops = async (mglt) => (
    await fetch(`http://starwars-starships.herokuapp.com/stops/${mglt}`)
  );
}

export default StarshipsAPI;


