class AjaxHelper {
  defaults = {
    "method": "get",
    "headers": []
  }
  constructor() {
    ['delete', 'get', 'head'].forEach((method) => {
      this.defaults.headers[method] = {};
    });
    ['post', 'put', 'patch'].forEach((method) => {
      this.defaults.headers[method] = { 'Content-Type': 'application/json;charset=utf-8' }
    });
  }

  _formatQueryString(data) {
    return Object.keys(data).map(function (key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(data[key]);
    }).join('&');
  }

  get(url) {
    return this.request({ url });
  }
  post(url, data) {
    return this.request({ url, data, "method": "post" });
  }
  request(config) {
    config = Object.assign({}, this.defaults, config);
    let url = config.url + (config.params ? (~config.url.indexOf('?') ? '&' : '?') + this._formatQueryString(config.params) : ''), option = {
      method: config.method.toLowerCase(),
      headers: config.headers[config.method],
      body: JSON.stringify(config.data)
    }
    return new Promise(function (resolve, reject) {
      fetch(url, option).then((res) => {
        resolve(res.json());
      })
    });
  }
}
const ajaxHelper = new AjaxHelper();
const instance = ajaxHelper.request.bind(ajaxHelper);
export default instance;
