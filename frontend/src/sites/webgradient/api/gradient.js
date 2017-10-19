import request from '@/utils/request';

const url = `${API_HOST}/v1/gradients`;
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
