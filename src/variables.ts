// in typescript we can declare variables' type in two ways
// 1. by specifying the type after the variable name
// 2. by assigning a value to the variable at the time of declaration

// 1. specifying the type after the variable name
let var1: string;
var1 = "hello";
// var1 = 10; // error

// 2. assigning a value to the variable at the time of declaration
const var2 = 10;
// var2 = "hello"; // error

// we can also use union types to allow a variable to hold multiple types
let var3: string | number;
var3 = "hello";
var3 = 10;
// var3 = true; // error

// we can also use any type to allow a variable to hold any type
let var4: any;
var4 = "hello";
var4 = 10;
var4 = true;

// we can also use type aliases to create custom types
type StringOrNumber = string | number;
let var5: StringOrNumber;
var5 = "hello";
var5 = 10;
// var5 = true; // error
