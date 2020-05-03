import { Component } from 'react';
import Container from '../components/Container'
import Map from '../components/Map'
import Head from 'next/head'

export default class Home extends Component {
  static async getInitialProps (ctx) {
    const fetch = require('node-fetch')
    const { location } = await fetch('https://api.halfmoon.ws/users/self/location')
      .then(response => response.json())
      .then(data => ({
        location: data.status === 'ok' ? data.data : {}
      }))

    return {
      location
    }
  }

  render () {
    const { location } = this.props
      return (
        <div>
          <Container>
            <section>
              <h1>Who am I?</h1>

              <p>
                I'm an entrapreneur, artist, and programmer. I'm a co-founder at <a href='https://pearmill.com?utm_source=referral&utm_medium=web&utm_campaign=Nima'>Pearmill</a>, and
                sometimes help founders raise money. If you'd like to know me, you should
                read <a href='/principles'>about my principles</a>. Message me <a href="https://twitter.com/ngardideh" className='twitter'>@ngardideh</a>.
              </p>

            </section>
            <section>
              <h1>Where am I?</h1>

              <p>
                I’ve chosen to live a multi-city life, as per my <a href='/principles#home-is-planet-earth'>Home is Planet Earth</a> operating model.
                Below you can find me on Planet Earth. I’m working on a way to make it easier
                for my friends to predict where I will be in the future, but in the meantime, I
                hope a live map of my most recent location will suffice.
              </p>
            </section>
          </Container>
          <Map {...location} />
        </div>
    );
  }
}
