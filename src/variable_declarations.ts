import { log } from "./log";

let input = [1, 2];
let [first1, second1] = input;

function f([first, second]: [number, number]) {
  log(`first: ${first}, second: ${second}`);
}
f([1, 2]);

let [first2, ...rest2] = [1, 2, 3, 4];
log(`first2: ${first2}, rest2: ${rest2}`);
let [first3] = [1, 2, 3, 4];
log(`first3: ${first3}`);
let [, second4, , fourth4] = [1, 2, 3, 4];
log(`second4: ${second4}, fourth4: ${fourth4}`);

let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
{
  let { a, b } = o;
  log(`a: ${a}, b:${b}`);
}
{
  let { a, ...passthrough } = o;
  log(`total=${a.length + passthrough.b + passthrough.c.length}`);
}

let { a: newA, b: newB }: { a: string; b: number } = o;
log(`newA: ${newA}, newB: ${newB}`);

function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 101 } = wholeObject;
  log(`keepWholeObject: ${a}, ${b}`);
}
keepWholeObject(o);
keepWholeObject({ a: "yeah" });

type C = { a: string; b?: number };
function f2({ a, b }: C) {}

function f3({ a, b } = { a: "", b: 100 }) {
  log(`f3: ${a}, ${b}`);
}
f3();

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let bothPlus = [0, ...a1, ...a2, 7];
log(`totalPlus: ${bothPlus}`);

let defaultObj = {
  food: "spicy",
  price: "$$",
  ambiance: "noisy"
};
let search1 = {
  ...defaultObj,
  food: "rich",
}
log(`search1: ${search1}`);
