// Type is used to create custome types
// Type can describe primitive types, union types, intersection types, tuples, arrays, objects etc.

// Example of type alias
type Student = [string, number, number]; // [name, age, score  ]
const s1: Student = ["mohit", 20, 85];
const s2: Student = ["rahul", 21, 90];

type Animal = {
  name: string;
  age: number;
  breed: string;
  isPet: boolean;
};

const a1: Animal = {
  name: "dog",
  age: 5,
  breed: "labrador",
  isPet: true,
};
const a2: Animal = {
  name: "cat",
  age: 3,
  breed: "persian",
  isPet: true,
};

// Enum is used to define a set of named constants
// Enum can be numeric or string based

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

const dir1: Direction = Direction.Up;
const dir2: Direction = Direction.Left;

// Example : type called Car, enum for fueltype, create a variable myCar of type Car that has an extra property fuel of type FuelType

enum FuelType {
  Petrol = "Petrol",
  Diesel = "Diesel",
  Electric = "Electric",
}

type Car = {
  make: string;
  model: string;
  year: number;
  fuel: FuelType;
};

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  fuel: FuelType.Petrol,
};

console.log(myCar);

// create a base Type employee with properties id, name, department
// create two types fullTimeEmployee and partTimeEmployee that extends employee type
// fullTimeEmployee has an extra property salary
// partTimeEmployee has an extra property hourlyRate
// create a variable emp1 of type fullTimeEmployee and emp2 of type partTimeEmployee
type employee = {
  id: number;
  name: string;
  department: string;
};

// this is called intersection type

type fullTimeEmployee = employee & {
  salary: number;
};

type partTimeEmployee = employee & {
  hourlyRate: number;
};
const emp1: fullTimeEmployee = {
  id: 1,
  name: "mohit",
  department: "IT",
  salary: 50000,
};

const emp2: partTimeEmployee = {
  id: 2,
  name: "rahul",
  department: "HR",
  hourlyRate: 200,
};
console.log(emp1);
console.log(emp2);
