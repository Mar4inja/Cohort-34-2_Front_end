let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];

if (names.length === ages.length) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    result[names[i]] = ages[i];
  }
  console.log(result);
}
