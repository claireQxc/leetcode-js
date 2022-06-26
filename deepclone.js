var deepClone = (obj) => {
  let deepCloneObj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        deepCloneObj[key] = deepClone(obj[key]);
      } else {
        deepCloneObj[key] = obj[key];
      }
    }
  }
  return deepCloneObj;
}

// let obj = { a: 1 };
// let obj = [{a: 1}];
let obj = () => {
  console.log('12');
}
let cloneObj = deepClone(obj);
console.log('modify before: ', obj);
console.log('modify before: ', cloneObj);

cloneObj.b = 2;
console.log('modify after: ', obj);
console.log('modify after: ', cloneObj);