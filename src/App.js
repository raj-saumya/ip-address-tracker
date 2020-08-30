import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import TrackerMap from "./components/TrackerMap/tracker-map";
import { getIpLocation } from "./services/getLocation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ipAddress: "127.0.0.1",
      location: ["Some Region", "Some Country"],
      timezone: "GMT+",
      isp: "SpaceX Starlink",
      lat: 25.58,
      lng: 85.124
    };
  }

  handleClick = () => {
    getIpLocation(this.state.ipAddress).then(resp => {
      this.setState({
        ipAddress: resp.data.ip,
        location: [
          `${resp.data.location.city}`,
          `${resp.data.location.region}, ${resp.data.location.country}`
        ],
        timezone: resp.data.location.timezone,
        isp: resp.data.isp,
        lat: resp.data.location.lat,
        lng: resp.data.location.lng
      });
    });
  };

  handleChange = ipAddress => {
    this.setState({ ipAddress });
  };

  render() {
    return (
      <div className="main">
        <div className="main__header">
          <Header
            onSubmitIp={this.handleClick}
            onChangeIp={this.handleChange}
            {...this.state}
          ></Header>
        </div>
        <div className="main__map">
          <TrackerMap {...this.state}></TrackerMap>
        </div>
      </div>
    );
  }
}

export default App;
