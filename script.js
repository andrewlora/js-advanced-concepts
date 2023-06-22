//////////////////////////////////// Higher Order Functions  ///////////////////////////

const multiplyBy = (a) => (b) => a * b;
/* const multiplyBy = function (a) {
  return function (b) {
    return a * b;
  };
};
 */
console.log("multiplyBy2-4", multiplyBy(2)(4));
console.log("multiplyBy10-5", multiplyBy(10)(5));
console.log("multiplyBy100-2", multiplyBy(100)(2));
const multiplyBy2 = multiplyBy(2);
console.log("mulby2-4", multiplyBy2(4));
console.log("mulby2-10", multiplyBy2(10));
const multiplyBy5 = multiplyBy(5);
console.log("mulby5-4", multiplyBy5(4));
console.log("mulby5-10", multiplyBy5(10));

////////////////////////////////////////////////////////////////////////////////////////

var cost = 40;
var x = 10;
var y = 120;
var z = 130;

// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

//////////////////////////////// SOLUTION //////////////////////////////////
const character = {
  name: "Simon",
  getCharacter() {
    return () => this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter();

//How Would you fix this?
// console.log("?", giveMeTheCharacterNOW());

////////////////////////////////////////////////////////////////////////////////

var b = {
  name: "jay",
  say() {
    // console.log("b", this);
  },
};

var c = {
  name: "jay",
  say() {
    return function () {
      // console.log("c", this);
    };
  },
};

var d = {
  name: "jay",
  say() {
    return () => console.log("d", this);
  },
};

// b.say();
// c.say()();
// d.say()();

const object = {
  name: "Andres",
  lastName: "Lora",
  age: 20,
  cost: 40,
  x: 10,
  y: 120,
  z: 130,
  fullName() {
    this.name + " " + this.lastName;
  },
};

object.fullName();

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

(function () {
  x = 11111111;
  y = 1212121212;
  z = 130131313;

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  function sub(a, b) {
    return a - b;
  }
  sum(2, 3);
  mul(2, 5);
  div(2, 5);
  sub(2, 3);
})();

sum(2, 3);
sub(2, 3);
add(2, 3);
mul(2, 3);
div(2, 3);
