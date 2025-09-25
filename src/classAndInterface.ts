// interface is a contract which a class must follow
// it defines the structure of an object

interface Shape {
  color: string;
  sides: number;
  area(): number;
}

// you don't use function keyword in interface or class

class Rectangle implements Shape {
  constructor(
    public color: string,
    public sides: number,
    public length: number,
    public width: number,
  ) {
    this.color = color;
    this.sides = sides;
    this.length = length;
    this.width = width;
  }

  area(): number {
    return this.length * this.width;
  }
}
class Circle implements Shape {
  constructor(
    public color: string,
    public sides: number,
    public radius: number,
  ) {
    this.color = color;
    this.sides = sides;
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myRect = new Rectangle('red', 4, 10, 5);
const myCircle = new Circle('blue', 0, 7);

console.log('Rectangle Area:', myRect.area());
console.log('Circle Area:', myCircle.area());
