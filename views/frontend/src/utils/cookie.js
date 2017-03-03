class Cookie {
  constructor() {
    this.cookies = {};
    if (document.cookie) document.cookie.split(';').forEach((cookie) => {
      let entry = cookie.split('='), key = decodeURIComponent(entry.shift()).replace(/^\s*|\s*$/g, ''), value = decodeURIComponent(String(entry.join('')));
      this.cookies[key] = value;
    });
  }

  get(key) {
    return this.cookies[key];
  }

  set(key, value, options) {
    options = options || {};
    if (typeof options.expires === 'number') {
      let days = options.expires, t = options.expires = new Date();
      t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
    }
    return (document.cookie = [
      key, '=', encodeURIComponent(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '',
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join(''));
  }
}
export default Cookie;
