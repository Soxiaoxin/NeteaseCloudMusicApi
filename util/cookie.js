var cookie = {
  os: 'pc',
}

function set(k, v) {
  cookie[k] = v
}

function get() {
  return cookie
}
module.exports = {
  get,
  set,
}
