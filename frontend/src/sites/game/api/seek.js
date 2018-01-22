import request from 'utils/request';

const url = `${API_HOST}/v1/seek`;

const api = {
  uploadData(data) {
    return request({
      method: 'post',
      url: `${url}/data`,
      data: data
    });
  },
  getUserGameData(data) {
    return request({
      method: 'get',
      url: url,
      params: data
    });
  },
};
export default api;
