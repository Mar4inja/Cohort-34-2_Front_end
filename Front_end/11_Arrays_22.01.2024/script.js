let arr =[1, 2, 3, 'four', 'five']; // Massive 'object'
console.log(arr);
console.log(typeof arr);

// Change original massive, add elements to massives end
// Return new massive length 
console.log('========== PUSH ==========');
let res = arr.push(6, 7, 8);

console.log(arr); // Return new Array [1, 2, 3, 'four', 'five', 6, 7, 8]
console.log(res); // Return size or new size /8


// Change original massive, remove last elements from massives
// Return deleted element 
console.log('========== POP ==========');
res = arr.pop();

console.log(arr); // Return new Array [1, 2, 3, 'four', 'five', 6, 7, 8]
console.log(res); // Return size or new size /8


// Change original massive, remove first elements from massive
// Return deleted element 
console.log('========== SHIFT ==========');
res = arr.shift();

console.log(arr); // Return new Array [2, 3, 'four', 'five', 6, 7, 8]
console.log(res); // return 1


// Change original massive, add elements to massives start
// Return new massive length 
console.log('========== UNSHIFT ==========');
res = arr.unshift(0, 1);

console.log(arr); // Return new Array [0, 1, 2, 3, 'four', 'five', 6, 7]
console.log(res); // 8


// Merge two ore more massives!
console.log('========== CONCAT ==========');
 let arr1 = [1,2,3];
 let arr2 = [4,5,6];
 res = arr1.concat(arr2);
 console.log(arr1);
 console.log(arr2);
 console.log(res);

// поверхностное копирование
 let arrCopy = arr1;
 console.log(arr1);
 console.log(arrCopy);

 arr1[0] = 1000;
 console.log(arr1);
 console.log(arrCopy);

console.log('DEEP COPY');

 // глубокое копирование
 let arrTrueCopy = [...arr1];
 console.log(arrTrueCopy);
 console.log(arr1);