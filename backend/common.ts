import axios from 'axios';

import { BASE_URL } from '@/config';

const BACKEND_ORIGIN = BASE_URL;

export const METHODS = {
  delete: 'delete',
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  options: 'options',
};

export function getRoute(route: string) {
  return BACKEND_ORIGIN.concat(route);
}

export function fetchAPI(route: string, method: string, data?: object) {
  return axios({
    method,
    url: getRoute(route),
    data,
  });
}
