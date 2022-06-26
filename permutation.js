var permutation = (arr) => {
  let resArr = [];
  let visitedArr = Array.from({length: arr.length}).fill(false);
  let sortedArr = arr.sort();
  backTrace(sortedArr, 0, visitedArr, [], resArr);
  return resArr;
}

var backTrace = (originalArr, index, visitedArr, tempArr, resArr) => {
  if (index >= originalArr.length) {
    let resStr = tempArr.join('');
    resArr.push(resStr);
    return;
  }
  for (let i = 0; i < originalArr.length; i++) {
    if (visitedArr[i] || (index > 1 && !visitedArr[i] && originalArr[i] === originalArr[i - 1])) continue;
    visitedArr[i] = true;
    tempArr[index] = originalArr[i];
    backTrace(originalArr, index + 1, visitedArr, tempArr, resArr);
    visitedArr[i] = false;
  }
}

let res = permutation( ['a', 'b', 'c', 'd']);
console.log(res);