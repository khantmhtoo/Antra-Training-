// OOP
// static - class method vs instance method

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   walk() {
//     console.log(this.name + " is walking");
//   }
// }

// let arr = [1, 2, 3];
// let narr = arr.forEach((e) => e + 1);
// console.log(narr);

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

Array.prototype.myReducer = function (cb, args = 0) {
  for (let i = 0; i < this.length; i++) {
    cb((args += this[i]));
  }
  return args;
};

Object.prototype.forEach = function (cb) {
  // keys()
  const keys = Object.keys(this);
  for (let i = 0; i < keys.length; i++) {
    cb(jets[i], this[keys[i]]);
  }
};
