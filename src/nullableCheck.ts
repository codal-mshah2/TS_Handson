// Optional Chaining and Nullish Coalescing

type User = {
  id: number;
  name: string;
  age?: number; // age is optional
  score?: number; // score is optional
};

const user1: User = { id: 1, name: 'mohit', age: 20, score: 85 };
const user2: User = { id: 2, name: 'rahul', age: 21 };
const user3: User = { id: 3, name: 'ankit', score: 95 };

// Provide a default value if null or undefined: ?? it is called nullish coalescing operator
console.log(
  'Name: ' + user1.name + ', Age: ' + (user1.age ?? 18) + ', Score: ' + (user1.score ?? 0),
);
console.log(
  'Name: ' + user2.name + ', Age: ' + (user2.age ?? 18) + ', Score: ' + (user2.score ?? 0),
);
console.log(
  'Name: ' + user3.name + ', Age: ' + (user3.age ?? 18) + ', Score: ' + (user3.score ?? 0),
);

// Accessing nested properties safely: ?. it is called optional chaining operator
type Student = {
  id: number;
  name: string;
  details?: {
    age?: number;
    score?: number;
  };
};

const student1: Student = {
  id: 1,
  name: 'mohit',
  details: { age: 20, score: 85 },
};
const student2: Student = { id: 2, name: 'rahul', details: { age: 21 } };
const student3: Student = { id: 3, name: 'ankit' };

console.log(
  'Name: ' +
    student1.name +
    ', Age: ' +
    (student1.details?.age ?? 18) +
    ', Score: ' +
    (student1.details?.score ?? 0),
);

//?. → stops execution if the value before ?. is null or undefined.
// Optional chaining (?.) does not “stop execution” completely, it just short-circuits that access and returns undefined.
//Nullish coalescing (??) then checks if the result is null/undefined and provides a fallback.
