// YOUR CODE COMES HERE




















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

