/*
  Task

  Реализуйте функцию, которая принимает на вход массив и элементы, которые должны отсутствовать в возвращаемом массиве.
*/

let without = (coll, ...arg) => {
  return coll.reduce((acc, elem) => arg.includes(elem) ? acc : [...acc, elem], [])
}

/*
  Testing
*/

console.log(without([2, 1, 2, 3], 1, 2, 5)); // [3]