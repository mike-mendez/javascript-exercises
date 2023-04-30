const findTheOldest = (array) => {
  let currentYear = new Date().getFullYear();
  let oldest = 0;
  let answer = null;
  array.forEach((element) => {
    if (element.yearOfDeath) {
      if (element.yearOfDeath - element.yearOfBirth > oldest) {
        answer = element;
        oldest = element.yearOfDeath - element.yearOfBirth;
      }
    } else {
      if (currentYear - element.yearOfBirth > oldest) {
        answer = element;
        oldest = currentYear - element.yearOfBirth;
      }
    }
  });

  return answer;
};

// Do not edit below this line
module.exports = findTheOldest;
