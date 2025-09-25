// Basic function with type annotation to parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with optional parameter
function greetWithAge(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Function with default parameter
function greetWithDefault(name: string, age: number, country = 'India'): string {
  return `Hello, ${name}! You are ${age} years old. You are from ${country}.`;
}

// Function with rest parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(greet('Mohit'));
console.log(greetWithAge('Rahul', 21));
console.log(greetWithAge('Ankit'));
console.log(greetWithDefault('Mohit', 20));
console.log(greetWithDefault('Rahul', 21, 'USA'));
console.log(sum(1, 2, 3, 4, 5));

// practical example. A function calculate that takes two numbers and an optional operator (string: "add" | "subtract" | "multiply" | "divide").
// If operator is not provided, default should be "add". Return the calculated result.

type operator = 'add' | 'subtract' | 'multiply' | 'divide';

//You cannot combine ? and = in the same parameter declaration.

//Use either: optional (ops?: operator) without default, or default (ops: operator = "add") without ?.

const calc = (a: number, b: number, ops: operator = 'add'): number => {
  switch (ops) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return a + b;
  }
};

console.log(calc(10, 5));
console.log(calc(10, 5, 'subtract'));
console.log(calc(10, 5, 'multiply'));
console.log(calc(10, 5, 'divide'));
console.log(calc(10, 5, 'add'));
