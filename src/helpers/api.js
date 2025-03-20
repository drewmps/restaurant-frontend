import axios from "axios";
const api = axios.create({
  baseURL: "https://h8-phase2-gc.vercel.app",
});
export { api };
