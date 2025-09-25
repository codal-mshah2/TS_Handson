// /literals in TypeScript (and programming in general) are specific, fixed values that you write directly in your code. They represent the exact value, not a variable or expression.

// Example of string literals
const myName: 'mohit' = 'mohit'; // 'mohit' is a string literal type
// myName = "rahul"; // Error: Type '"rahul"' is not assignable to type '"mohit"'

// Example of numeric literals
const myAge: 20 = 20; // 20 is a numeric literal type
// myAge = 21; // Error: Type '21' is not assignable to type '20'

// Example of boolean literals
const isStudent: true = true; // true is a boolean literal type
// isStudent = false; // Error: Type 'false' is not assignable to type 'true'

// Example of union of literals
let score: 85 | 90 | 95;
score = 85; // valid
score = 90; // valid
score = 95; // valid
// score = 100; // Error: Type '100' is not assignable to type '85 | 90 | 95'
