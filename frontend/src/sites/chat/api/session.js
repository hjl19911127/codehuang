import request from 'utils/request';
const url = '/api/sessions';

const api = {
  get(data) {
    return request({
      method: 'get',
      url: url,
      data: data
    });
  }
};

export default api;
