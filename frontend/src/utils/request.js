class AjaxHelper {
  defaults = {
    "method": "get",
    "headers": {
      'Accept': 'application/json',
    }
  };
  defaultsMethodHeaders = {};

  constructor() {
    ['delete', 'get', 'head'].forEach((method) => {
      this.defaultsMethodHeaders[method] = {};
    });
    ['post', 'put', 'patch'].forEach((method) => {
      this.defaultsMethodHeaders[method] = {'Content-Type': 'application/json;charset=utf-8'}
    });
  }

  _formatQueryString(data) {
    return Object.keys(data).map(function (key) {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(data[key]);
    }).join('&');
  }

  get(url) {
    return this.request({url});
  }

  post(url, data) {
    return this.request({url, data, "method": "post"});
  }

  request(config) {
    config = Object.assign({}, this.defaults, config);
    config.method = config.method.toLowerCase();
    if (config.cache === false) {
      config.params = config.params || {};
      config.params['_'] = +new Date();
    }
    let url = `${config.url}${config.params ? `${(~config.url.indexOf('?') ? '&' : '?')}${this._formatQueryString(config.params)}` : ''}`,
      option = {
        method: config.method,
        headers: Object.assign({}, config.headers, this.defaultsMethodHeaders[config.method]),
        body: JSON.stringify(config.data)
      };
    return new Promise(function (resolve, reject) {
      fetch(url, option).then((res) => {
        resolve(res.json());
      })
    });
  }
}

const ajaxHelper = new AjaxHelper();
export default ajaxHelper.request.bind(ajaxHelper);
