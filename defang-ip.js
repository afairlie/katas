var defangIPaddr = function(address) {
  return address.split("").map(c => {
      if (c === ".") {
          return "[.]"
      } else {
          return c
      }
  }).join("")
};

console.log(defangIPaddr('1.1.1.1.1'), '1[.]1[.]1[.]1[.]1');

// better solutions:

function defangIPPerformant(address) {
  const word = address.split(".");
  return word.join("[.]");
}

function defangIPPerformant2(address) {
  return address.replace(/\./g, '[.]');
}

console.log(defangIPPerformant('1.1.1.1.1'), '1[.]1[.]1[.]1[.]1');
console.log(defangIPPerformant2('1.1.1.1.1'), '1[.]1[.]1[.]1[.]1');