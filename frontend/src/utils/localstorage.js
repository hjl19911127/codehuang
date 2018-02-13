class LocalStorage {
  static get(key) {
    return new Promise((resolve, reject) => {
      let data;
      try {
        data = JSON.parse(localStorage.getItem(key))
      } catch (e) {
        reject(e);
      }
      resolve(data);
    })
  }

  static set(key, value) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(value));
      LocalStorage.get(key).then((data) => {
        if (data) resolve(data);
        else throw new Error();
      }).catch((e) => {
        reject(e);
      })
    })
  }
}

export default LocalStorage;
