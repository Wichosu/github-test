const o1 = { a: 1};
const o2 = { b: 2};
const o3 = { c: 3};

const obj = Object.assign(o1, o2, o3);
console.log(obj);
console.log(o1);
console.log(o2, o3);