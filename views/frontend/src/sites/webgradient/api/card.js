import request from 'utils/request';

const api = {
  getList(data) {
    return request({
      method: 'get',
      url: '/api/v1/cards',
      params: data
    });
  }
};
export default api;
