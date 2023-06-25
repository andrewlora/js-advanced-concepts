// **************************** Constructor function ********************************

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "Attack with " + this.weapon;
};

// Elf.prototype.build = function () {
//   return "building a house " + this.name;
// };

Elf.prototype.build = function () {
  return () => {
    console.log(this);
    return "building a house " + this.name;
  };
};

const peter = new Elf("peter", "stones");
console.log(peter);
console.log(peter.attack());
console.log(peter.build()());
const sam = new Elf("sam", "fire");
console.log(sam);
console.log(sam.attack());
console.log(sam.build()());

// ********************************** Class ********************************

class Human {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with " + this.weapon;
  }
}

const andrew = new Human("peter", "stones");
console.log(andrew instanceof Human);
console.log(andrew);
console.log(andrew.attack());

// ********************************** This 4 Ways ********************************

// 1: New binding 'this'
function Person(name, ege) {
  this.name = name;
  this.ege = ege;
}

const person1 = new Person("person1", 21);
console.log("new binding this", person1);

// 2: implicit binding

const person = {
  name: "Karen",
  age: 13,
  hi() {
    console.log("hi implicit " + this.name);
  },
};

console.log("implicit imp ", person.hi());

// 3: explicit binding

const person3 = {
  name: "Ade",
  age: 39,
  hi: function () {
    return "hi " + this.setTimeout;
  }.bind(window),
};

console.log("explicit", person3.hi());

// 4: Arrow function

const person4 = {
  name: "Brandon",
  age: 91,
  hi: function () {
    var inner = () => {
      return console.log("hi " + this.name);
    };
    return inner();
  },
};

console.log("Arrow function", person4.hi());

// ********************************** Inheritance with JS using 'extends' ********************************

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Titan extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const dolby = new Titan("Dolby", "Cloth", "house");
console.log("dolby ", dolby.attack());
