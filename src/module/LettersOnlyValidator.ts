import { StringValidator } from "./Validation";

let letterRegexp = /^[a-zA-Z]+$/;

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return letterRegexp.test(s);
  }
}