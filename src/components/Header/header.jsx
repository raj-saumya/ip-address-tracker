import React from "react";
import "./header.css";
import patternBg from "../../assets/pattern-bg.png";
import SearchBar from "../SearchBar/searchBar";
import LocationInfo from "../LocationInfo/locationInfo";

const Header = ({ onSubmitIp, onChangeIp, ...rest }) => {
  return (
    <React.Fragment>
      <div className="header">
        <img className="header__bg" src={patternBg} alt="patternBg" />
        <div className="header__info">
          <div className="info__header">
            <label>IP Address Tracker</label>
          </div>
          <div className="info__searchBar">
            <SearchBar
              onSubmitIp={onSubmitIp}
              onChangeIp={onChangeIp}
              {...rest}
            ></SearchBar>
          </div>
        </div>
      </div>
      <div className="footer">
        <LocationInfo {...rest} />
      </div>
    </React.Fragment>
  );
};

export default Header;
