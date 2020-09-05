import axios from "axios";
import getCsrfToken from "./getCsrfToken";

const axiosConfig = {
  headers: {
    "X-CSRF-Token": getCsrfToken(),
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
};

export { axios as axiosDefault };
export default axios.create(axiosConfig);
