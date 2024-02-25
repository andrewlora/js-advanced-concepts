//////////////////////////////////// Closures //////////////////////////////////////////////////////////////////
// Two benefits
// 1: Memory efficient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😃");
  console.log("created array");
  return bigArray[index];
}
// console.log(heavyDuty(20));
// console.log(heavyDuty(200));
// console.log(heavyDuty(2003));
// console.log(heavyDuty(2011));

function heavyDuty2() {
  const bigArray = new Array(7000).fill("😃");
  // console.log("created array");
  return function (index) {
    return bigArray[index];
  };
}

const fn2 = heavyDuty2();
// console.log(fn2(20));
// console.log(fn2(200));
// console.log(fn2(2003));
// console.log(fn2(2011));

// problem
let view;
function initialize() {
  view = "🏠";
  console.log("view has been initialized");
}
// abuse many invocations
// console.log(initialize());
// console.log(initialize());
// console.log(initialize());
// console.log("********************************");
// console.log(view);

// solution

function initialize2() {
  let counter = 0;
  return function () {
    if (counter > 0) return;
    else {
      counter++;
      // console.log("view has been initialized");
    }
  };
}
let fnIni = initialize2();
// console.log(fnIni.counter);
// console.log(fnIni());
// console.log(fnIni());
// console.log(fnIni());

// 2: Encapsulation
// ********************************** Compose **********************************************

const compose = (f, g) => (a) => f(g(a));
const sum1 = (num) => num + 1;

// function compose(f, g) {
//   return function (a) {
//     return f(g(a));
//   };
// }
// function sum1(num) {
//   return num + 1;
// }

console.log("Compose", compose(sum1, sum1)(5));

// *****************************************************************

const array = [1, 2, 3, 4, 5, 6, 7];
// for (var index = 0; index < array.length; index++) {
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  setTimeout(() => {
    // console.log("I am at index: ", index);
  }, 3000);
}

const array2 = [1, 2, 3, 4, 5, 6, 7];
// for (var index = 0; index < array.length; index++) {
for (var index = 0; index < array2.length; index++) {
  const element = array2[index];
  (function (clousureIndex) {
    setTimeout(function () {
      console.log("I am at index: ", clousureIndex);
    }, 3000);
  })(index);
}

///////////////////////////////////////////////////////////////

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

// console.log(a()()());

//////////////////////////////////// Higher Order Functions  ///////////////////////////

const multiplyBy = (a) => (b) => a * b;
/* const multiplyBy = function (a) {
  return function (b) {
    return a * b;
  };
};
 */
// console.log("multiplyBy2-4", multiplyBy(2)(4));
// console.log("multiplyBy10-5", multiplyBy(10)(5));
// console.log("multiplyBy100-2", multiplyBy(100)(2));
const multiplyBy2 = multiplyBy(2);
// console.log("mulby2-4", multiplyBy2(4));
// console.log("mulby2-10", multiplyBy2(10));
const multiplyBy5 = multiplyBy(5);
// console.log("mulby5-4", multiplyBy5(4));
// console.log("mulby5-10", multiplyBy5(10));

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

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

var obj = {
  i: 10,
  b: () => console.log(this),
  c: function () {
    console.log(this);
  },
};
obj.b();
obj.c();

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: () => {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

const obj = {
  name: "Billy",
  sing() {
    console.log("normal this", this);
    console.log("normal args", arguments);
    return "lalalal " + this.name;
  },
  singAgain() {
    return this.sing() + " !";
  },
  singArrow: () => {
    console.log("arrow this", this);
    console.log("arrow args", arguments);
  },
};
console.log(obj.sing());
console.log(obj.singAgain());
console.log(obj.singArrow());

const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunction = () => {
      console.log("b", this);
    };
    anotherFunction();
  },
};
obj.sing();
