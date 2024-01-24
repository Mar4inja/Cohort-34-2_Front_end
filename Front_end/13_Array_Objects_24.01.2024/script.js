let arr = ["one", "two", "Three", "eight", "tHree", "thrEE", "six"];

console.log("========IndexOf========");
let res = arr.indexOf("three", 3); // -1 - element in array doesn't exist

console.log(arr); // Original array doesn't changed
console.log(res); // searched element index or -1, if doesn't exist

//**************************************************************************************************************
console.log("========Includes========");
res = arr.includes("two"); // true - element in array exist

console.log(arr); // Original array doesn't changed
console.log(res); // true if searched element in array exist, false if not!

//**************************************************************************************************************
console.log("========FindIndex========");
res = arr.findIndex(predicateLength3);

function predicateLength3(element, index) {
  return element.length === 3 && index > 2;
}

console.log(arr); // Original array doesn't changed
console.log(res); // 6

// res = arr.findIndex((element, index) => element.length === 3 && index > 2)
res = arr.findIndex((element, index) => {
  console.log("Hello from arrow function");
  return element.length === 3 && index > 2;
});

res = arr.findIndex((element, index) => element.toLowerCase() === "three");
console.log(res);

console.log(multiply(2, 5));
console.log(multiply);

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 5));

const multiplyArrow = (a, b) => a * b;
// const multiplyArrow = (a, b) => {
//     return a* b
// };

console.log(multiplyArrow(8, 6));

const person = {
  firstName: "Peter",
  lastname: "Parker",
  age: 45,
  address: {
    country: "USA",
    city: "NY",
    house: {
      street: "Roosevelt",
      number: 111,
      litter: "a",
      apartment: 201,
    },
  },
  fullName: () => console.log(person.firstName + " " + person.lastname),
};
person.fullName();

res = Object.keys(person); // Массив ключей объекта
console.log(res);

res = Object.values(person); // Массив значений объекта
console.log(res);

res = Object.entries(person); // Массив, где каждым элементом является массив из двух элементов: ключ, значение
console.log(res);

// HOMEWORK
/* 
    Необходимо создать объект bankAccount (дебетовая карта), представляющий собой
    банковский счёт со следующими свойствами (ключами):
    1. accountNumber: '123456789';
    2. accountHolderName: 'Alice';
    3. balance: 0;
    4. deposit(sum) - для описания действия по добавлению суммы на счёт;
    5. withdraw(sum) - для описания действия по списанию суммы со счёта;
    6. checkBalance() - для проверки баланса.
*/
