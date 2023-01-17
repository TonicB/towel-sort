
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArr = []
  try {
    matrix.map((row, rowIndex) => rowIndex % 2 === 0 ? row.forEach((x) => newArr.push(x)) : row.forEach((y, i, a) => newArr.push(a[a.length - 1 - i])));
  }
  catch {

  }
  return newArr
}

