import { log } from "./log";

function printLabel1(labledObject: { label: string }) {
  log(`label1: ${labledObject.label}`);
}
let lo1 = {
  size: 10,
  label: "Size 10 object"
};
printLabel1(lo1);

interface LabeledValue {
  label: String;
}

function printLabel2(labledObject: LabeledValue) {
  log(`label2: ${labledObject.label}`);
}
printLabel2(lo1);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySq = createSquare({ color: "black" });
log(`color: ${mySq.color}, area:${mySq.area}`);

interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5;
let a = [1, 2, 3];
let ro: ReadonlyArray<number> = a;

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = (src, sub) => {
  let result = src.search(sub);
  return result > -1;
};
log(`Search: ${mySearch("superman", "man")}`);

interface StringArray {
  [index: number]: String;
  // [index: string]: String;
}
let myStrArr: StringArray = ["hoge", "huga"];
log(`${myStrArr[0]}, ${myStrArr[1]}`);

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  // [x: number]: Animal;
  // [y: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string;
}

interface ReadonlyStringArray {
  [index: number]: String;
}
let myStrArr2: ReadonlyStringArray = ["bob", "mike"];
log(`${myStrArr2[0]}, ${myStrArr2[1]}`);

interface ClockInterface {
  currentTime: Date;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

class Clock implements ClockInterface {
  currentTime: Date;

  constructor(hour: number, minute: number) {}
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLen: number;
}

let sq1 = <Square>{};
sq1.color = "black";
sq1.sideLen = 100;
sq1.penWidth = 1;


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter> function(start) { };
  counter.interval = 10;
  counter.reset = () => { }
  return counter;
}

let c1 = getCounter();
c1(10);
c1.reset();

class Controll {
  private privateState: any;

  protected protectedState: any = "protected";

  public publicState: any = "public";

  private privateFunc() {
    log(`privateFunc`);
  }

  protected protectedFunc() {
    log(`protectedFunc: ${this.protectedState}`);
  }

  public publicFunc() {
    log(`publicFunc: ${this.publicState}`);
  }
}

interface SelectableControll extends Controll {
  select(): void;
}

class Button extends Controll implements SelectableControll {
  select(): void {
    // this.privateState;
    this.protectedState;
    this.publicState;
    // this.privateFunc()
    this.protectedFunc();
    this.publicFunc();
  }
}

class TextBox extends Controll {
  select() {
  }
}

// class Image implements SelectableControll {
//   select(): void {
//     throw new Error("Method not implemented.");
//   }
// }

let b1 = new Button();
b1.select();