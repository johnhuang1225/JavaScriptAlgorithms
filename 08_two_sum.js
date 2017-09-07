function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
  
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7)); // should [[6, 1], [3, 4], [3, 4]]
console.log(twoSum([40, 11, 19, 17, -12], 28)); // should [[40, -12], [11, 17]]