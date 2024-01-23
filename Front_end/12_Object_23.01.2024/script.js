const obj = {
  userName: "Peter",
  age: 23,
  nationality: "Poland",
  sex: "male",
  dateOfBirth: "31.05.2000",
};

const objCopy = { ...obj, userName: "Tigran" };

obj.age = 50;
console.log(obj);
console.log(objCopy);

// obj.age = 23.5

// console.log(obj);

let arr = [1, 2, 3, "four", "five"];
let re = [];

// don't change original, return new massive
console.log("------SLICE------");
res = arr.slice(1, 4);

console.log(res);
console.log(arr);

// change original, return new massive
console.log("------SPLICE------");
res = arr.splice(1, 4);

console.log(res);
console.log(arr);

console.log("------SPLIT------");
//String
const str = "     Beer or not to beer     ";
const str1 = str.trim();
console.log(str1);

// return massive with words
res = str1.split(" ");
console.log(res);

console.log("------JOIN------");

// merge words from massive to String!
let newRes = res.join(" ");
console.log(newRes);

// Модальное окно
// alert('Your data was successfully added')

// let answer = confirm('Confirm, you have 18 years');
// console.log(answer);

// answer = prompt('Write your adress');
// console.log(answer);

