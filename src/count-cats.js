module.exports = function countCats(matrix) {
  let sum = 0;
  if(!matrix){
    return sum;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[i].length; a++) {
      if (matrix[i][a] == '^^') {
        sum += 1;
      }
    }
  }
  return sum;
};
