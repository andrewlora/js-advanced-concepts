let dragon = {
  name: "dragon",
  age: 100,
  hobby: "coding",
  fight() {
    return 5;
  },
  sing() {
    return console.log("lalala");
  },
};

let lizard = {
  name: "kiki",
  age: 10,
  hobby: "eating",
  fight() {
    return 1;
  },
};

lizard.__proto__ = dragon;
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    // console.log(prop);
  }
}

// ****************************************************************

let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 45;
console.log(human.isPrototypeOf(socrates));

// ****************************************************************

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

console.log(new Date().lastYear());

Array.prototype.map = function () {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(this[i] + "🗺️");
  }
  return array;
};

console.log([1, 2, 3].map());
