res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(res);

function sumDigits(x) {
  let sum = 0;
  while (x) {
    // x != 0
    sum += x % 10; // sum = sum + (x % 10)
    x = (x - (x % 10)) / 10;
  }
  return sum;
}

res = luckyNumber(123321); // 1 + 2 + 3 == 8 + 7 + 1
console.log(res);

function luckyNumber(x) {
  let numberLength = (x + "").length;

  let halfLength = numberLength / 2 - ((numberLength / 2) % 1);
  console.log(halfLength);
  console.log(numberLength);
  const secondHalf = x % 10 ** halfLength;
  const firstHalf = (x - secondHalf) / 10 ** halfLength;
  return sumDigits(firstHalf) == sumDigits(secondHalf);

  // if ((x + "").length === 6) {
  //   const secondHalf = x % 1000;
  //   const firstHalf = (x - secondHalf) / 1000;
  //   return sumDigits(firstHalf) == sumDigits(secondHalf);
  // } else {
  //   return "Wrong number";
  // }
}
function banana() {
  let a = "a";
  let b = "b";

  res = (b + a + +a + a).toLocaleLowerCase();
  console.log(res);
}
banana();

function fourOrSeven(x) {
  // if (x === 4) {
  //   return 7
  // }else{
  //   return 4;
  // }
  // return x === 4 ? 7 : 4;
  // }

  // switch (x) {
  //   case 4:
  //     return 4;
  //   default:
  //     return 7;
  // }
  // return 11 - x;

  // return 28 / x;
}
