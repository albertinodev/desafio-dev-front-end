import axios from "axios";

export const getAPIClient = () => {

  const api = axios.create({
    baseURL: 'https://fidli.cloud'
  })

  return api;
}