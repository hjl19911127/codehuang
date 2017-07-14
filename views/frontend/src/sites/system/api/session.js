import request from 'utils/request';
const sessionUrl = '/api/sessions';
const loginUrl = '/api/login';

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
