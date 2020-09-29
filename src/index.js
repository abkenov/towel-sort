
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = []

  if (matrix === undefined) return result

  let count = 0

  for (row of matrix) {
    result = (count % 2) ? result.concat(row.reverse()) : result.concat(row)
    count++
  }

  return result;
}
