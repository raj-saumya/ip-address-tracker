import React from "react";
import "./locationInfo.css";

const LocationInfo = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="locationCard">
      <div className="locationCard__section">
        <span className="locationCard__subHead">IP ADDRESS</span>
        <div className="h-x"></div>
        <label className="locationCard__head">{ipAddress}</label>
      </div>
      <div className="locationCard__division">
        <div className="divider"></div>
      </div>
      <div className="locationCard__section">
        <span className="locationCard__subHead">LOCATION</span>
        <div className="h-x"></div>
        <label className="locationCard__head">{location[0]},</label>
        <br />
        <label className="locationCard__head">{location[1]}</label>
      </div>
      <div className="locationCard__division">
        <div className="divider"></div>
      </div>
      <div className="locationCard__section">
        <span className="locationCard__subHead">TIMEZONE</span>
        <div className="h-x"></div>
        <label className="locationCard__head">{timezone}</label>
      </div>
      <div className="locationCard__division">
        <div className="divider"></div>
      </div>
      <div className="locationCard__section">
        <span className="locationCard__subHead">ISP</span>
        <div className="h-x"></div>
        <label className="locationCard__head">{isp}</label>
      </div>
    </div>
  );
};

export default LocationInfo;
