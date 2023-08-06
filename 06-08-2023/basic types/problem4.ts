// Declare a function called neverEnding that never returns (returns the never type). For example, you can have it throw an error or use an infinite loop.

function neverEnding(): never {
  throw new Error("Try again!!");
}

neverEnding();
