export default (acc, cur) => {
  acc[cur.id] = cur
  return acc
}
