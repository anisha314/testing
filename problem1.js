function combineArrays(a, b) {
    return [...a, ...b];
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

const groceries = combineArrays(fruits, vegetables);
console.log(groceries);