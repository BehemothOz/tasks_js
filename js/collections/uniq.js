/*
  Task

  Реализуйте функцию, которая принимает на вход массив и возвращает
  новый массив, полученный из исходного удалением повторяющихся элементов.
*/

let uniq = (arr) => {
  return arr.reduce((prev, current) => {
    return !prev.includes(current) ? prev.concat(current) : prev;
  }, []);
}

//uniq([2, 1, 2, 3]); // [2, 1, 3]