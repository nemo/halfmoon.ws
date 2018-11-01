import React, {Component} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'
import 'mapbox-gl/dist/mapbox-gl.css';

const SF = {
  latitude: 37.774929,
  longitude: -122.419418
}

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: 400,
      latitude: SF.latitude,
      longitude: SF.longitude,
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

    if (!this.props.location) {
      viewport.zoom = 1
    } else  {
      viewport.latitude = (this.props.location || {}).lat
      viewport.longitude = (this.props.location || {}).lng
      viewport.zoom = 13.3
    }

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
        onViewPortChange={(viewport) => this.setState({ viewport })}
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
