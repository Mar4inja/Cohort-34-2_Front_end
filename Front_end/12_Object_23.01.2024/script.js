const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];
const result = [];

for (let i = 0; i < names.length; i++) {
    // result.push(names[i] + " " + ages[i] + ' лет/годов');
    result.push(`${names[i]} ${ages[i]} лет/годов`);
    // result[i] = names[i] + " " + ages[i] + ' лет/годов';
};

// Аналог цикла for для итерации object (объектов и массивов)
// for (const name of names) {
//     console.log(name);
// }

console.log(result);


//  Объекты
const obj = {
    userName: 'Peter',
    age: 14,
    nationality: 'Poland',
    sex: 'male',
    dateOfBirth: '31.08.2009',
    // age: 15,
    // dateOfBirth: '31.08.2008',
}

const objCopy = {...obj, userName: 'Tigran'};

obj.age = 50;

console.log(obj);
console.log(objCopy);

// obj.age = 14.5;

// console.log(obj);

const arr = [1, 2, 3, 'four', 'five'];
let res;

// Не изменяет оригинал , возвращает новый массив
console.log('========== SLICE ==========');
res = arr.slice(1, 4);

console.log(res);
console.log(arr);

// Изменяет оригинал , возвращает новый массив
console.log('========== SPLICE ==========');
res = arr.splice(1, 4);

console.log(res);
console.log(arr);

// String
const str = '     Beer or not to beer     ';
const str1 = str.trim();
console.log(str1);

// Возвращает массив, элементами которого будут подстроки между разделителем
res = str1.split(' ');
console.log(res);

// Возвращает строку, которая будет состоять из элементов массива, разделённые separator
let newRes = res.join(' ');
console.log(newRes);

// Модальные окна
// alert('Ваши данные были успешно обработаны');

// let answer = confirm('Подтвердите, что Вы старше 18 лет');
// console.log(answer);

// answer = prompt('Напишите страну Вашего проживания');
// console.log(answer);



// Home Work (LIBRARY)

const library = [
    {
        ISBN: '123456789',
        TITLE: 'Harry Potter',
        AUTHOR: 'J. K. Rowling',
        YEAR: '1997'
    }
];

let inputDate = prompt('Enter book data separate by ";"');
// 1. ISBN (уникальный идентификатор книги)
// 2. TITLE (название книги)
// 3. AUTHOR (автор книги)
// 4. YEAR (год издания книги)
// Example: '123456789;Gold Fish;A.S.Pushkin;1833'

// ctrl + /
/* shift + alt + a */

while (inputDate) {
    // TODO
    const bookData = inputDate.split(';');
    if (
        bookData.length === 4 &&
        bookData[0].length === 9 &&
        bookData[0] &&
        bookData[1] &&
        bookData[2] &&
        bookData[3] &&
        findBook(bookData[0]) === -1
    ) {
        library.push({
            ISBN: bookData[0],
            TITLE: bookData[1],
            AUTHOR: bookData[2],
            YEAR: bookData[3]
        });
        alert('Книга успешно добавлена');
    } else {
        alert('Ошибка при добавлении книги');
    }
    inputDate = prompt('Enter book data separate by ";"');
}

function printLibrary() {
    // TODO Распечатать по отдельности каждую книгу из библиотеки
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

function findBook(isbn) {
    // TODO return i of this book or -1 if book not exist
    
    // for (let i = 0; i < library.length; i++) {
    //     if (isbn === library[i].ISBN) {
    //         return i;
    //     }
    // }

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