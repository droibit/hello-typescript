//// <reference path="namespace/Validation.ts" />
//// <reference path="namespace/LettersOnlyValidator.ts" />

import { log } from "./log";
import { StringValidator } from "./module/Validation";
import { ZipCodeValidator } from "./module/ZipCodeValidator";
import { LettersOnlyValidator } from "./module/LettersOnlyValidator";
import { Shapes } from "./namespace/Shapes";

let strings = ["Hello", "98052", "101"];
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}

let validator2: { [s: string]: Validation.StringValidator } = {};

import polygons = Shapes.Polygons;
let sq1 = new polygons.Square();