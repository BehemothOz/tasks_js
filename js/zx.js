/*
  Посчитать количество повторяющихся элементов массива. Результат представить в виде объекта:
*/

var uniq = ['a', 'a', 'b', 'b', 'b'].map((name) => {
  return {count: 1, name: name}
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})