function countWords(text) {
    const words = text.split(/\s+/);
    const wordCount = new Map();
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    return wordCount;
}
console.log(countWords("hello world hello"));


// ony unique items are allowed
function removeDuplicates(arr) {
    return new Set(arr);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// swap the values
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}
console.log(swapValues(5, 10)); // [10, 5]

// access the random values
function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
}
console.log(extractElements([1, 2, 3, 4, 5])); // [1, 2, 5]


// min amd max values 
function findMinMax(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}
console.log(findMinMax([5, 2, 7, 1, 9])); // { max: 9, min: 1 }

// nested objects
function extractPersonDetails(person) {
    const { name, address: { street } } = person;
    return { name, street };
}
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};
console.log(extractPersonDetails(person)); // { name: "John", street: "123 Main St" }
