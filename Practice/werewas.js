// let day1 = {
//   chukwuma : false,
//   events:[" classes", "hub", "coffee", "internet"]
// };

// console.log(day1.chukwuma);

// day1.wolf = false;
// console.log(day1.wolf);

// let anObject ={left: 1, right: 2};
// //console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log("right" in anObject);
// console.log(anObject.right);

// console.log(Object.keys({x: 0, y: 0, z: 2}));

// let objectA = {a:1, b:2};
// Object.assign(objectA, {b:3, c:4});
// console.log(objectA);

let object1 = {value:10};
let object2 = object1;
let object3 = {value:10};

console.log(object1 == object2);
console.log(object2 == object3);

object1.value = 15;
console.log(object2.value);

console.log(object3.value);