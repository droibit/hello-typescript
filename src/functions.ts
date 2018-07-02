import { log } from "./log";

let add1: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y;
}

let add2: (baseNumber: number, increment: number) => number = (x, y) => {
  return x + y;
}

function buildName(firstName: string = "John", lastName?: String): String {
  if (lastName) {
    return `${firstName} ${lastName}`;
  }
  return firstName;
}
log(`name: ${buildName()}`);

function buildName2(firstName: string = "john", ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(", ");
}
log(`names: ${buildName2("Joseph", "Samuel", "Lucas", "MacKinzie")}`);

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

log("card: " + pickedCard.card + " of " + pickedCard.suit);

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck2: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
  }
}
let cardPicker2 = deck.createCardPicker();
let pickedCard2 = cardPicker();
log("card: " + pickedCard2.card + " of " + pickedCard2.suit);