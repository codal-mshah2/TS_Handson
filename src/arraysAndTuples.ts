// simple types
// we can also use arrays to hold multiple values of the same type
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "b", "c"];
const arr3: (string | number)[] = [1, "a", 2, "b"];

// we can also use tuples to hold multiple values of different types
const tuple1: [string, number] = ["a", 1];
const tuple2: [string, number, boolean] = ["a", 1, true];

// we can also use readonly arrays and tuples to prevent modification
const readonlyArr: readonly number[] = [1, 2, 3];

const readonlyTuple: readonly [string, number] = ["a", 1];
// readonlyArr.push(4); // error
// readonlyTuple[0] = "b"; // error

// difference between array and tuple
// array can hold multiple values of the same type, can be of any length, can be accessed using index.
// tuple can hold multiple values of different types, has a fixed length, can be accessed using index or destructuring.

const arr4: number[] = [1, 2, 3];
const tuple3: [string, number, boolean] = ["a", 1, true];

// Example of student and their scores using tuple and array.

const student1: [string, number, number] = ["mohit", 20, 85];
const student2: [string, number, number] = ["rahul", 21, 90];
const student3: [string, number, number] = ["ankit", 22, 95];

const students: [string, number, number][] = [student1, student2, student3];

for (const student of students) {
  const [name, age, score] = student;
  console.log(`Name: ${name}, Age: ${age}, Score: ${score}`);
}

// updating the testscore of one student
if (students[1]) students[1][2] = 95; // updating rahul's score to 95

for (const student of students) {
  const [name, age, score] = student;
  console.log(`Name: ${name}, Age: ${age}, Score: ${score}`);
}
