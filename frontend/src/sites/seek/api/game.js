import request from 'utils/request';

const url = '/api/game';

const api = {
  create(data) {
    return request({
      method: 'post',
      url: url,
      data: data
    });
  },
  query(data) {
    return request({
      method: 'get',
      url: url,
      params: data
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
