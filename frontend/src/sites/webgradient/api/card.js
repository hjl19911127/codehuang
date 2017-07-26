import request from '@/utils/request';

const url = `${apiHost}/v1/gradients`;
const api = {
  getList(data) {
    return request({
      method: 'get',
      url: url,
      params: data
    });
  }
};
export default api;
