const repeatString = (string, number) => {
  if (number < 0) return "ERROR";
  let answer = "";
  for (let index = 0; index < number; index++) {
    answer += string;
  }

  return answer;
};

// Do not edit below this line
module.exports = repeatString;
