import axios from "axios";

export const getAPIClient = () => {

  const api = axios.create({
    baseURL: 'https://desafio-dev-back-end.herokuapp.com',
    //baseURL: 'http://localhost:4000'
  })

  return api;
}