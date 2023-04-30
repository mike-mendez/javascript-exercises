const reverseString = (string) => {
    let answer = '';
    for (let index = string.length - 1; index >= 0; index--) {
        answer += string[index];
    }

    return answer;
};

// Do not edit below this line
module.exports = reverseString;
