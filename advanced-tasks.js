
let students = [];

function addStudent(name, age, grades) {
  students.push({ name, age, grades });
}

function removeStudent(name) {
  students = students.filter(s => s.name !== name);
}

function showStudents() {
  console.log(students);
}

function getAverage(grades) {
  let sum = grades.reduce((a, b) => a + b, 0);
  return sum / grades.length;
}

function checkStatus(student) {
  let avg = getAverage(student.grades);
  return avg >= 50 ? "Pass" : "Fail";
}

addStudent("Ali", 20, [60, 70, 80]);
addStudent("Sara", 21, [40, 50, 60]);
showStudents();
console.log("Status Ali:", checkStatus(students[0]));
console.log("Status Sara:", checkStatus(students[1]));

//=====task2====//
let tasks = [];

function addTask(task) {
  tasks.push(task);
}

function deleteTask(task) {
  tasks = tasks.filter(t => t !== task);
}

function showTasks() {
  console.log(tasks);
}

addTask("Study JavaScript");
addTask("Finish project");
showTasks();

deleteTask("Study JavaScript");
showTasks();
//=====task3====//
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

let user1 = new User("Ali");
let prod1 = new Product("Laptop", 1000);
let prod2 = new Product("Mouse", 50);

user1.addToCart(prod1);
user1.addToCart(prod2);

let cart = new Cart();
cart.addItem(prod1);
cart.addItem(prod2);

console.log("User cart:", user1.cart);
console.log("Cart total:", cart.getTotal());