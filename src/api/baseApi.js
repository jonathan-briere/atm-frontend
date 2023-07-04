import axios from "axios";

const baseApi = () => {
  const defaultOptions = {
    baseURL: `${process.env.GATSBY_GEO_API_URL}/api/v1`,
  };
  const instance = axios.create(defaultOptions);

  return instance;
};

export default baseApi();
