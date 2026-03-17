Javascript
let num = prompt("Enter a number:");

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

id="0xzn0p"

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

let num = prompt("Enter a number:");
console.log(factorial(num));