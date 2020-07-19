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