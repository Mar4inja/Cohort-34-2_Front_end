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

const t = setInterval(move, 20);
// clearInterval(t);


function move() {

}
