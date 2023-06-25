// Constructor function

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
