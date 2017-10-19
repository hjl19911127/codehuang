import request from '@/utils/request';

const url = `${API_HOST}/v1/menus`;
export default {
  query(data) {
    return request({
      method: 'get',
      url: url,
      params: data,
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
  update(id, data) {
    return request({
      method: 'put',
      url: `${url}/${id}`,
      data: data
    });
  },
  remove(id) {
    return request({
      method: 'delete',
      url: `${url}/${id}`
    });
  },
};
