const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (array) => {
  let answer = 0;
  array.forEach((element) => {
    answer += element;
  });

  return answer;
};

const multiply = (array) => {
  let answer = 1;
  array.forEach((element) => {
    answer *= element;
  });

  return answer;
};

const power = (num1, num2) => {
  return Math.pow(num1, num2);
};

const factorial = (number) => {
  if (number == 0 || number == 1) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
