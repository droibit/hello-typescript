import { log } from "./log";

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!(<any>result).hasOwnerProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  log() {}
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n1 = jim.name;
// jim.log();

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  } else if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}

function isNumber(x: any): x is number {
  return typeof x === "number";
}
function isString(x: any): x is string {
  return typeof x === "string";
}

log(`paddingLeft:${padLeft("Hello, world", 4)}`);
// log(`paddingLeft:${padLeft("Hello, world", true)}`);

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird | null {
  return null;
}

let pet1 = getSmallPet();
// pet1.layEggs();

function isFish(pet: Bird | Fish): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(public numSpaces: number) {}

  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(public value: string) {}

  getPaddingString(): string {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("   ");
}

let padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
  padder.numSpaces;
}
if (padder instanceof StringPadder) {
  padder.value;
}

let s1 = "foo";
// s1 = null;

let s2: string | null = "bar";
s2 = null;
// s2 = undefined;

function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
// f(1, null);
f(1, undefined);

class C {
  a: number = 1;
  b?: number;
}
let c = new C();
c.a = 12;
// c.a = undefined;
c.b = 13;
c.b = undefined;
// c.b = null;

function f2(v: string | null) {
  log(`charAt: ${v!.charAt(0)}`);
}

// f2(null);

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getname(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  }
  return n();
}

type Container<T> = { value: T };
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}
let people: LinkedList<Person>;
// var s = people.name;

class BaseBuilder {

  public hoge(): this {
    return this;
  }
}

class ExtendBuilder extends BaseBuilder {

  public huga(): this {
    return this;
  }
}

let eb = new ExtendBuilder()
eb.hoge().huga();

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
  name: string;
  age: number;
}

let p1: Person = {
  name: 'Jarid',
  age: 35
};
let strings: string[] = pluck(p1, ['name']);
log(strings);
let personProps: keyof Person;  // 'age' | 'name'

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
log(`getProperty(${getProperty(p1, 'name')})`);

interface Map<T> {
  [key: string]: T;
}
let nkeys: keyof Map<number>; // string
let nvalue: Map<number>['foo']; // number
// log(nvalue);

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

type Partial<T> = {
  [P in keyof T]?: T[P];
}

let rp: Readonly<Person> = p1;
log(`readonly: ${rp.name}`);

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };