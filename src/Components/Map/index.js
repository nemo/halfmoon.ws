import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 13.3
    }
  };

  componentDidMount () {
    window.addEventListener('resize', () => this.resize())
  }

  resize () {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth
      }
    })
  }

  render() {
    let { viewport } = this.state

    viewport.latitude = ((this.props.location || {}).lat) || viewport.latitude
    viewport.longitude = (this.props.location || {}).lng || viewport.latitude

    let name = this.props.name || 'Planet Earth';
    let category = (this.props.category || {})
    let icon = null

    if (category && category.icon) {
      icon = `${category.icon.prefix}64${category.icon.suffix}`
    }

    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibmltYWciLCJhIjoiY2pud3VoZzVwMDVmcjNrbXh5b3d3NjB2OSJ9.yBw1zlfz47gr8EMyaitZjA'}
        mapStyle={'mapbox://styles/nimag/cjnwuqk0a0aph2rqj7j6iz1wc'}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
      <Marker
        offsetTop={-50}
        longitude={viewport.longitude}
        latitude={viewport.latitude} >
          <Pin name={name} icon={icon} />
      </Marker>
    </ReactMapGL>
    );
  }
}
