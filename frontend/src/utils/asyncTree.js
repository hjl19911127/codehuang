const asyncTree = {
  arrayToTree(data = [], idKey = 'id', pidKey = 'parent_id') {
    return new Promise((resolve, reject) => {
      let map = {}, tree = [];
      data.forEach((v) => {
        v.children = [];
        map[v[idKey]] = v;
      });
      data.forEach((v) => {
        if (map[v[pidKey]]) {
          v.parent_title = map[v[pidKey]].title;
          map[v[pidKey]].children.push(v);
        } else {
          tree.push(v);
        }
      });
      resolve(tree);
    })
  },
  treeToArray(data, id, pid) {
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
};

export default asyncTree;
