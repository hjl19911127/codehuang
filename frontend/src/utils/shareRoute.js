export default {
  path: '*',
  beforeEnter: (to, from, next) => {
    if (!history.pushState) {
      let m = /^\/([\w_\-]+)\/?/gi.exec(to.path)
      if (m) {
        document.cookie = `site=${m[1]}`
        window.location.href = to.path
      }
    }
    next()
  }
}
