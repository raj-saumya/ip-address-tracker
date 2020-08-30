import React, { useState } from "react";
import "./searchBar.css";
import SubmitIcon from "../../assets/icon-arrow.svg";

const SeachBar = ({ onSubmitIp, onChangeIp }) => {
  const [ipAddress, setIpAddress] = useState("");

  return (
    <div className="search">
      <div className="h-3x"></div>
      <div className="left search__input">
        <input
          type="text"
          placeholder="Search for any IP"
          value={ipAddress}
          onChange={e => {
            setIpAddress(e.currentTarget.value);
            onChangeIp(e.currentTarget.value);
          }}
        />
      </div>
      <div className="left pointer search__submit" onClick={onSubmitIp}>
        <img src={SubmitIcon} alt="submit" />
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default SeachBar;
