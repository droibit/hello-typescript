import * as v from "./Validation";

export default class ParseIntBasedZipCodeValidator implements v.StringValidator {

  isAcceptable(s: string): boolean {
    return s.length === 5 && parseInt(s).toString() === s;
  }
}

export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';