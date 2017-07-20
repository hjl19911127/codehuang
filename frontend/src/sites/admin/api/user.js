import request from '@/utils/request';

const url = `${apiHost}/api/v1/users`;
export default {
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
}
