import request from 'utils/request';
const url = '/api/v1/sessions';

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
