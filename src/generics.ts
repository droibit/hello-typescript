import { log } from "./log";

function identity<T>(arg: T): T {
  return arg;
}
let i1 = identity<string>("hoge");
let i2 = identity("hoge");

interface GenericIdentityFn {
  <T>(arg: T): T;
}

interface GenericIdentityFn2<T> {
  <T>(arg: T): T;
}

let ifn1: GenericIdentityFn = identity;
let ifn2: GenericIdentityFn2<number> = identity;

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  log(arg);
  return arg;
}
loggingIdentity({ length: 10, value: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m");

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function create<T extends Animal>(c: { new (): T }): T {
  return new c();
}

create(Lion).keeper.nametag;  // typechecks!
create(Bee).keeper.hasMask;   // typechecks!