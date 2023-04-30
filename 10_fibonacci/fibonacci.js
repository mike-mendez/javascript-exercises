const fibonacci = (number) => {
  if (number < 0) return "OOPS";
  if (number == 0) return 0;

  let a = 0;
  let b = 1;

  for (let index = 1; index < number; index++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
