import request from 'utils/request';
const sessionUrl = '/api/v1/sessions';
const loginUrl = '/api/v1/login';

const api = {
  get(data) {
    return request({
      method: 'get',
      url: sessionUrl,
      data: data
    });
  },
  login(data){
    return request({
      method: 'post',
      url: loginUrl,
      data: data
    });
  }
};

export default api;
