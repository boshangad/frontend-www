function setData(data) {
  let res = {
    error: 0,
    msg: '操作成功',
  };
  if (data !== undefined && data !== null && data !== '') {
    res.data = data;
  }
  return res;
}

export { setData };
