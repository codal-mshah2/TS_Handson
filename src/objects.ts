// simple
const user = {
  name: 'mansi',
  age: 20,
  isAdmin: true,
};

user.age = 33;
console.log(user);

// advanced types
// readonly
type Employee = {
  readonly id: number;
  name: string;
};

const emp: Employee = {
  id: 1,
  name: 'mohit',
};
// emp.id = 2; // error
emp.name = 'rahul';
console.log(emp);

type Product = {
  //In TypeScript, when you use an index signature like [category: string]: string;, it applies to all properties of that object.
  [category: string]: string | number | boolean;
  price: number;
  inStock: boolean;
};

//with this type definition, you can add any number of properties with string keys to a Product object,
// and their values can be string, number, or boolean.
const prod: Product = {
  price: 100,
  inStock: true,
  name: 'Laptop',
  brand: 'Dell',
};

prod.price = 120;
prod.inStock = false;
prod.name = 'Gaming Laptop';

console.log(prod);
