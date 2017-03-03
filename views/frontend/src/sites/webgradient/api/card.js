import request from 'utils/request';

const api = {
  getList(data) {
    return request({
      method: 'get',
      url: '/api/cards',
      params: data
    });
  }
};
export default api;
