import React, { Component } from 'react';
import Container from '../../Components/Container'
import Map from '../../Components/Map'

import './index.css';

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount ()  {
    this.reload()
  }

  reload () {
    fetch('http://localhost:3001/users/self/location')
    .then(response => response.json())
    .then(data => this.setState({
      location: data.status === 'ok' ? data.data : {}
    }));
  }

  render() {
    const { location } = this.state
    return (
      <div className="App">
        <section>
          <Container>
            <h1 className='text-center'>Where am I?</h1>

            <p>
              I’ve chosen to live a multi-city life, as per my <a href='/principles#home-is-planet-earth'>Home is Planet Earth</a> principle.
              Below you can find me on Planet Earth. I’m working on a way to make it
              easier for my friends to predict where I will be in the future, but in the meantime, I hope a live
              map of my most recent location will suffice.
            </p>

          </Container>
          <Map {...location}/>
        </section>
      </div>
    );
  }
}
