import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ece4-58-136-242-20.ngrok-free.app/',
  headers: { 'ngrok-skip-browser-warning': true },
});

export default instance;
