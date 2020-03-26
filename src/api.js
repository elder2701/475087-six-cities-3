import axios from "axios";

const Error = {

};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeount: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
