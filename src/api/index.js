import { API_ENDPOINT } from "../constants";

const Api = {
  get: async () => await fetch(API_ENDPOINT)
};

export default Api;
