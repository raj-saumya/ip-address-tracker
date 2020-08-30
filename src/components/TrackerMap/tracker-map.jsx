import React, { Component } from "react";
import "./trackerMap.css";
import * as leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "../../assets/icon-location.svg";

class TrackerMap extends Component {
  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    this.mymap.setView([this.props.lat, this.props.lng]);
    this.marker.setLatLng(new leaflet.LatLng(this.props.lat, this.props.lng));
    this.marker.bindPopup(`Found ${this.props.ipAddress}`).openPopup();
  }

  initMap() {
    const mymap = leaflet.map("map").setView([25.58, 85.12], 16);
    leaflet
      .tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoicmFqLXNhdW15YSIsImEiOiJja2VncnYzZGgweWprMnRzNWRocmMzaWRlIn0.puVXiLSprUxq7MWmqo9cUA"
        }
      )
      .addTo(mymap);

    const customMarkerIcon = leaflet.icon({
      iconUrl: MarkerIcon,
      shadowUrl: "",
      iconSize: [18, 24],
      iconAnchor: [0, 0],
      popupAnchor: [6, 0]
    });

    const marker = leaflet
      .marker([25.58, 85.124], { icon: customMarkerIcon })
      .addTo(mymap);

    marker.bindPopup(`Found ${this.props.ipAddress}`).openPopup();

    this.mymap = mymap;
    this.marker = marker;
  }

  render() {
    return <div id="map" className="map"></div>;
  }
}

export default TrackerMap;
