import { log } from "./log";

let fullName = "Tom Brown";
log(`My name is ${fullName}`);

let list1: number[] = [1, 2, 3];
log(`list1: ${list1}`);
let list2: Array<number> = [4, 5];
log(`list2: ${list2}`);

let t1: [string, number] = ["hello", 10];
log(`t1: ${t1}, 1:${t1[0]}, 2:${t1[1]}`);

enum Color {
  Red = 1,
  Blue,
  Green
}
log(`Color: r=${Color.Red}, ${Color[1]}`);

function create(o: object | null) {}
create({});
create(null);
// create(1); -> Error

let anyValue: any = "this is a string";
log(`len: ${(anyValue as String).length}`);
