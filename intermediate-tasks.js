let text = prompt("Enter a sentence");

 
let words = text.split(" ");
console.log("Words count:", words.length);


let chars = text.replace(/\s/g, "");
console.log("Characters:", chars.length);
ر
let count = {};
words.forEach(word => {
  count[word] = (count[word] || 0) + 1;
});

let maxWord = "";
let maxCount = 0;

for (let word in count) {
  if (count[word] > maxCount) {
    maxCount = count[word];
    maxWord = word;
  }
}

console.log("Most repeated word:", maxWord);

//=====task2=====//
let arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr)];

unique.sort((a, b) => a - b);

let sum = unique.reduce((acc, num) => acc + num, 0);

console.log("Unique & sorted array:", unique);
console.log("Sum:", sum);

//=====task3=====//
let nestedArray = [[1, 2], [3, 4], [5]];

let flatArray = nestedArray.flat();

console.log("Flattened array:", flatArray);