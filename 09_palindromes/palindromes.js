const palindromes = (string) => {
    let answer = '';
    [...string].forEach(element => {
        if (element.match(/^[.,:!?]/) || element == ' ') element = '';
        answer += element;
    });

    answer = answer.toLowerCase();

    for (let index = 0; index < Math.round(answer.length / 2); index++) {
        if (answer[index] !== answer[answer.length - 1 - index]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
