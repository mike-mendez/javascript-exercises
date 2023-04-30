const sumAll = (start, end) => {
  let answer = 0;

  if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number") return "ERROR";

  if (start < end) {
    for (let index = start; index <= end; index++) {
      answer += index;
    }
  } else {
    for (let index = start; index >= end; index--) {
      answer += index;
    }
  }

  return answer;
};

// Do not edit below this line
module.exports = sumAll;
