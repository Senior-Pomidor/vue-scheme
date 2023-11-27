export const objToQuery = obj => {
  const queryStr = new URLSearchParams(obj).toString()

  return queryStr
}
