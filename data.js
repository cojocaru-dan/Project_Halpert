// YOUR CODE COMES HERE
// 1
function evenOrOdd(numberAsString) {
  if (!Number.isInteger(Number(numberAsString))) {
    return `${numberAsString} is not integer number.`
  }
  if (Number(numberAsString) % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd("13"));
console.log(evenOrOdd("28"));

// 2
function basicOperations(operation, value1, value2) {
  if (operation === "+") return value1 + value2;
  else if (operation === "-") return value1 - value2;
  else if (operation === "*") return value1 * value2;
  else if (operation === "/") return value1 / value2;
}
console.log(basicOperations("+", 3, 4));
console.log(basicOperations("-", 13, 3));
console.log(basicOperations("*", 7, 7));
console.log(basicOperations("/", 40, 5));

// 3
const matches = {
  match1: "1:0", match2: "0:4", match3: "1:3",
  match4: "3:0", match5: "3:0", match6: "2:2",
  match7: "1:0", match8: "0:1", match9: "0:2",
  match10: "1:0", match11: "1:1", match12: "2:0",
  match13: "1:0", match14: "2:1", match15: "1:0"
};

function totalPoints(matchesPlayed) {
  return Object.values(matchesPlayed)
               .map(function(score) {
                  if (Number(score[0]) > Number(score[score.length - 1])) {
                    return 3;
                  } else if (Number(score[0]) < Number(score[score.length - 1])) {
                    return 0;
                  } else {
                    return 1;
                  }
               })
               .reduce(function(firstScore, secondScore) {
                return firstScore + secondScore;
               });
}
console.log(totalPoints(matches));

// 4
function largestNumber(a, b, c) {
  const arr = [a * (b + c), a * b * c, a + b * c, (a + b) * c];
  return arr.reduce(function(first, second) {
    return first < second ? second : first;
  })
}

console.log(largestNumber(1, 2, 3));
console.log(largestNumber(4, 5, 6));

// 5
function index(array, number) {
  if (number < 0 || number >= array.length) {
    return -1;
  }
  return array[number]**number;
}

console.log(index([1, 2, 3, 4, 5, 6], 3));

// 6
function quaterOfTheYear(month) {
  return Math.ceil(month / 3);
}
console.log(quaterOfTheYear(3));
console.log(quaterOfTheYear(4));
console.log(quaterOfTheYear(9));
console.log(quaterOfTheYear(11));

// 7
function century(year) {
 return Math.ceil(Math.abs(year) / 100);
}

console.log(century(1966));
console.log(century(1800));
console.log(century(1312));
console.log(century(2007));
console.log(century(82));
console.log(century(-82));
console.log(century(-433));

// 8
function formTheMinimum(numbers) {
  let firstDigit;
  numbers.sort(function(a, b) {return a - b});
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] !== 0) {
      firstDigit = numbers.splice(index, 1)[0];
      break;
    }
  }
  return Number(firstDigit + numbers.join(""));
}

console.log(formTheMinimum([3, 6, 2, 8, 9, 0, 1]));
console.log(formTheMinimum([8, 5, 3, 0, 0, 4, 1]));

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        {name: "evenOrOdd", content: evenOrOdd, type: "function"},
        {name: "basicOperations", content: basicOperations, type: "function"},
        {name: "totalPoints", content: totalPoints, type: "function"},
        {name: "largestNumber", content: largestNumber, type: "function"},
        {name: "index", content: index, type: "function"},
        {name: "quarterOfTheYear", content: quarterOfTheYear, type: "function"},
        {name: "century", content: century, type: "function"},
        {name: "formTheMinimum", content: formTheMinimum, type: "function"}
    ]
} catch (error) {
    toExport = {error: error.message}
}

export {toExport};

