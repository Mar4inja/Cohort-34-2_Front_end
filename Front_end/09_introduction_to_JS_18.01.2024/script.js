console.log("Hello world"); // "" '' `` 'Igor wrote: "Hello world"' "I'm Igor"
console.log(5 + 4);

// однострочный комментарий
/*
    однострочный комментарий
*/

// const (константа);
// let (переменная);

// var (переменная)

let a = 10;
console.log(a);

a = "15";
console.log(a);

const b = 5;
console.log(b);

// b = 6; Ошибка (запрещено для констант переопределять значение)

// DOM
// console.log(window);

const div1 = document.getElementById("div1");
console.log(div1);

div1.style.border = "1px solid black";

const pDiv1 = document.querySelectorAll("#div1 > p");
console.log(pDiv1);

for (let i = 0; i < pDiv1.length; i++) {
  pDiv1[i].innerHTML = "<span>new text " + (i + 1) + "</span>";
  // pDiv1[i].innerHTML = `<span>new text ${i+1}</span>`;
}

const newP = document.createElement("p");
newP.textContent = "This text was created by script";

div1.appendChild(newP);

// HomeWork

const t = setInterval(move1, 30);
const box = document.getElementById("box");
let pos = 0;
let flag = true;
let dir = 1;
//  move();

// clearInterval(t);

// function move() {
//   pos++;
//   if (pos == 150) {
//     clearInterval(t);

//   }

//   box.style.top = pos + 'px';
//   box.style.left = pos + 'px';
//   // box.style.left = `${pos}` + 'px' ;
// }
// function move() {
  // if (flag) {
  //   // Ja ir true, tad pievieno position +1, ja nē tad -1 (Vārdu sakot +1 kustība uz priekšu, bet -1 kustība atpakaļ.)
  //   pos++;
  // } else {
  //   pos--;
  // }
  // flag ? pos++ : pos--;
  // if (pos == 150) { // ja pozīcija saniedza 150, tad uzsāc kustiūbu atpakaļ!
  //   flag = false;
  // }
  // if (pos == 0) {  // ja pozīcija sasniedza 0 un atgriezās sākumpunktā, tad ieslēdz true un ej uz priekšu!
  //   flag = true;
  // }
//   if (pos == 0 || pos == 150) {
//     flag = !flag;
//   }
//   box.style.top = pos + "px";
//   box.style.left = pos + "px";
//   // box.style.left = `${pos}` + 'px' ;
// }

function move1() {
  pos += dir;
  if (pos == 0 || pos == 150) {
    // dir = -dir;
    dir *= -1;
  }
  box.style.top = pos + "px";
  box.style.left = pos + "px";
}
