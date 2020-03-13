const stringifyParams = (params) => {
  let string = '';
  Object.entries(params).forEach((elem) => {
    const [key, val] = elem;
    string = `${string}${key}=${val}&`;
  });
  return string;
};

export {
  stringifyParams,
};
