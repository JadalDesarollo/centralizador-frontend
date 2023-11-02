import Axios from 'axios';

const axios = Axios.create({
  baseURL: "http://192.168.18.13:3001/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export { axios };
