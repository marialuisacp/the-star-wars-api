import { Component } from 'react';

class StarshipsAPI extends Component {
  getStops = async (mglt) => (
    await fetch(`https://starwars-starships.herokuapp.com/stops/${mglt}`)
  );
}

export default StarshipsAPI;


