const stringifyParams = (params) => {
  let string = ''
  for (const [key, value] of Object.entries(params)) {
   string = string + `${key}=${value}&`
  }
  return string
}

export {
  stringifyParams,
}