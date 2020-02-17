module.exports = function countCats(matrix) {
 // throw 'Not implemented';
  // remove line with error and write your code here
  let count = 0;

  for (i = 0; i < matrix.length; i++){
    for (j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == '^^'){
        count += 1;
      }

    }

  }
  return count;
};
