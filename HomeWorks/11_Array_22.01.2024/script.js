let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];

if (names.length === ages.length) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    result[names[i]] = ages[i];
  }
  console.log(result);
}

console.log("*****Second resolve*****");

const names2 = ["Семен", "Иван", "Петр", "Татьяна"];
const ages2 = [18, 27, 74, 34];
const result = [];

for (let i = 0; i < names2.length; i++) {
  result.push(names2[i] + ":" + ages2[i] + " years old");
  
  // result = names2[i] + ":" + ages2[i] + " years old";
}

console.log(result);


console.log("*****Third resolve*****");

const names3 = ["Семен", "Иван", "Петр", "Татьяна"];
const ages3 = [18, 27, 74, 34];
const result3 = [];

for (const name of names3 ) {
  console.log(name);
 
  }

console.log(result);