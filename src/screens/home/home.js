import React, { Component } from 'react';
import './home.css';
import StarshipsList from '../../components/starship/list/starshipsList';
import InputMGLT from '../../components/inputMGLT/inputMGLT';
import Loading from '../../components/loading/loading';
import StarshipsAPI from '../../api/StarshipsAPI';
import Header from '../../components/header/header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 5000, starships: [], loading: true };
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  componentWillMount() {
    this.changeValue();
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.changeValue();
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    this.changeValue();
  }

  changeValue() {
    const api = new StarshipsAPI();
    const mglt = this.state.value;
    this.setState({
      loading: true
    });
    api.getStops(mglt)
      .then(response => response.json())
      .then(data => {
        this.setState({
          starships: data,
          loading: false
        });
      });
  }

  getStarships() {
    return this.state.starships;
  }

  render() {
    const { value, loading } = this.state;
    const { handleChange, handleSubmit, getStarships } = this;
    return (
      <div className='home-screen'>

        <Header></Header>
        <link href='https://fonts.googleapis.com/css?family=Bree+Serif|Cutive|Ultra' rel='stylesheet'></link>

        {loading
          ? <Loading></Loading>
          : <div>
            <InputMGLT
              handleChange={handleChange.bind(this)}
              handleSubmit={handleSubmit.bind(this)}></InputMGLT>
            <StarshipsList mglt={value} starships={getStarships.bind(this)}></StarshipsList>
          </div>}

      </div>
    );
  }
}

export default Home;
