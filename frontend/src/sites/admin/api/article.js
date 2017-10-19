import request from '@/utils/request';

const url = `${API_HOST}/v1/articles`;
export default {
  query(data) {
    return request({
      method: 'get',
      url: url,
      params: data
    });
  },
  get(id) {
    return request({
      method: 'get',
      url: `${url}/${id}`,
      cache: false
    });
  },
  create(data) {
    return request({
      method: 'post',
      url: url,
      data: data
    });
  },
};
