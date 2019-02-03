import { Component } from 'react';

// `http://starwars-starships.herokuapp.com/stops/${mglt}`

class StarshipsAPI extends Component {
  getStops = async (mglt) => (
    await fetch(`http://localhost:8888/stops/${mglt}`)
  );
}

export default StarshipsAPI;


