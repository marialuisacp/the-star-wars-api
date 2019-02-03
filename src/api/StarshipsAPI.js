import { Component } from 'react';

class StarshipsAPI extends Component {
  getStops = async (mglt) => (
    await fetch(`http://localhost:8081/stops/${mglt}`)
  );
}

export default StarshipsAPI;


