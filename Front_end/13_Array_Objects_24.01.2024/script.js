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
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 1000,
  deposit: (sum) => {
    sum > 0 && sum < 100000
      ? (bankAccount.balance += sum)
      : console.log("Amount is invalid");
  },
  withdraw: (sum) => {
    sum > 5 && sum <= bankAccount.balance
      ? (bankAccount.balance -= sum)
      : console.log("Amount is invalid");
  },
  checkBalance: () => console.log(bankAccount.balance),
};

// //Deposit
// bankAccount.checkBalance();
// bankAccount.deposit(500);
// bankAccount.checkBalance();

// bankAccount.deposit(700);
// bankAccount.checkBalance();

// bankAccount.deposit(-500);
// bankAccount.checkBalance();

// bankAccount.deposit(600000);
// bankAccount.checkBalance();

// //Withdraw

// bankAccount.withdraw(500);
// bankAccount.checkBalance();

// bankAccount.withdraw(700);
// bankAccount.checkBalance();

// bankAccount.withdraw(-500);
// bankAccount.checkBalance();

// bankAccount.withdraw(600000);
// bankAccount.checkBalance();

const balanceH1 = document.getElementById('balanceH1');
const withdrawBtn = document.getElementById('withdrawBtn');
const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const timeH2 = document.getElementById('timeH2');

withdrawBtn.onclick = () => {
   if (!isNaN(+amountInput.value)) {
    bankAccount.withdraw(+amountInput.value);

   }
   balanceH1.textContent = 'Balance: ' +bankAccount.balance; // change balance in app
   amountInput.value = '';   // clean amount after enter
  }
  depositBtn.onclick = () => {
    if (!isNaN(-amountInput.value)) {
     bankAccount.deposit(+amountInput.value);
 
    }
    balanceH1.textContent = 'Balance: ' +bankAccount.balance; // change balance in app
    amountInput.value = '';   // clean amount after enter
   }

   const date = new Date();
   console.log(date.getTime() /1000 / 60 / 60 / 24 / 365.25);

   

   const time = () => {
    const now = new Date();
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();;
    const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();;
    const actualTime = hours + ':' + minutes + ':' + seconds;
    timeH2.textContent = actualTime;
    console.log(actualTime);


  }


  setInterval(time, 1000);

  
  // 1. totalCost: 0 // Итоговая стоимость всех товаров
  // 2. addItem() // функция для добавления товара на склад
  // 3. removeItem() // функция для удаления товара на склад
  // 4. updateTotalCost() // обновление значения totalCost
  
  item = {
      name: 'Snickers',
      price: 5,
      quantity: 100,
      totalCost: 0
  }