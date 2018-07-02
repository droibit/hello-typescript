import { log } from "./log";

const enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  redius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  redius: 100
};