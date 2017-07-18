import request from 'utils/request';
const url = '/api/v1/users';

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
      data: data
    });
  }
};
export default api;
