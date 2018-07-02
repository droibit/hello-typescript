import { log } from "./log";

class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }

  greet(): string {
    return `Hello, ` + this.greeting;
  }
}

let greeter = new Greeter("world");
log(greeter.greet());

class Animal {
  name: string;

  private _name: string;

  constructor(name: string) {
    this.name = name;
    this._name = name;
  }

  move(distanceInMeters: number = 0) {
    log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    log("Woof! Woof!");
    // this._name
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    log("Slithering...");
    super.move(distanceInMeters);
  }
}

let dog = new Dog("Taro");
dog.bark();
dog.move();
dog.move(10000.0);

let sam = new Snake("Sammy the Python");
sam.move();
// sam.name = "joge";

class Octpass {
  readonly name: string;
  readonly numOfLegs: number = 8;

  constructor(name: string) {
    this.name = name;
  }
}

let dad = new Octpass("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";

class Octpass2 {
  constructor(readonly name: string, readonly numOfLegs: number = 8) {}
}

let dad2 = new Octpass2("Man with the 8 strong legs");
log(`dad2: ${dad2.name}, ${dad2.numOfLegs}`);

let passcode = "secret passcode";
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Tom";

class Grid {
  static origin = { x: 0, y: 0 };

  calculateDistanceFromOrigin(point: { x: number; y: number }): number {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let g1 = new Grid(1.0);
let g5 = new Grid(5.0);
log(g1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
log(g5.calculateDistanceFromOrigin({ x: 10, y: 10 }));

abstract class Department {

  constructor(public name: string) {

  }

  printName(): void {
    log(`Department name: ${this.name}`);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    log("The Accounting Department meets each Monday at 10am.");
  }
}
