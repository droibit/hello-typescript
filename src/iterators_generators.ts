import { log } from "./log";

let a1 = [1, "string", false];
for (let e of a1) {
  log(e);
}

for (let e in a1) {
  log(e);
}
log("------");
let pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";
for (let pet of pets) {
  log(pet);
}
for (let pet in pets) {
  log(pet);
}