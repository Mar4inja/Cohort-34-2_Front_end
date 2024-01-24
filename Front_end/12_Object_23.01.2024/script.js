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

// Home Work (LIBRARY)

const library = [
  {
    ISBN: "123456789",
    TITLE: "Harry Potter",
    AUTHOR: "J.K Rowling",
    YEAR: "1997",
  },
];

let inputData = prompt('Write book data using ";" (ISBN;TITLE;AUTHOR;YEAR)');
// 1. ISBN (уникальный идентификатор книги)
// 2. TITLE (название книги)
// 3. AUTHOR (автор книги)
// 4. YEAR (год издания книги)
// Example: '12345678;Gold Fish;A.S.Pushkin;1833'

// ctrl + /
/* shift + alt + a */

while (inputData) {
  const bookData = inputData.split(";");
  if (
    bookData === 4 && // Massive length pass
    bookData[0].length === 9 &&
    bookData[0] && // Every element is not empty
    bookData[1] &&
    bookData[2] &&
    bookData[3] &&
    findBook(bookData[0]) === -1 // findBook method must return -1, at this moment we don't have this book
  ) {
    library.push({
      ISBN: bookData[0],
      TITLE: bookData[1],
      AUTHOR: bookData[2],
      YEAR: bookData[3],
    });
    alert("added");
  } else {
    alert("error");
  }
  inputData = prompt('Write book data using ";" (ISBN;TITLE;AUTHOR;YEAR)');
}
function printLibrary() {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
  }
}

function findBook(isbn) {
  let i = 0;
  for (const book of library) {
    if (book.ISBN === isbn) {
      return i;
    }
    i++;
  }
  return -1;
}

printLibrary();
