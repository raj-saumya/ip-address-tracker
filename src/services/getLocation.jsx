import axios from "axios";

const apiEndPoint =
  "https://geo.ipify.org/api/v1?apiKey=at_eFt58xT6nLp2AQP0lilImKWwHIS5f&ipAddress=";

export const getIpLocation = ipAddress => {
  return axios.get(apiEndPoint + ipAddress);
};
