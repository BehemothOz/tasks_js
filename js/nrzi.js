/*
  Task

  NRZI код (Non Return to Zero Invertive) — один из способов линейного кодирования.
  Код формируется путем инверсного состояния при поступлении на вход кодирующего устройства логической единицы, при поступлении
  логического нуля состояние потенциала не меняется.

  Реализуйте функцию принимающую в качестве параметра строку в виде линейного сигнала и возвращающую строку с бинарным кодом.
*/

let nrzi = (str) => {
  if (str.length <= 1) return '';

	let iter = (list, acc) => {
    if (list.length == 0) return acc.join('');

    let [first, ...rest] = list;
		return iter( first == `|` ? rest.slice(1) : rest, first == `|` ? acc.concat(1) : acc.concat(0));
  }

  return iter([...str], []);
}

/*
  Testing
*/
// const result = nrzi('¯|__|¯|___|¯¯');
// console.log(result === '010110010') // '010110010';

// const result2 = nrzi('_|¯¯¯|_|¯¯¯¯|_|¯¯');
// console.log(result2 === '010011000110') // '010011000110';

// const result3 = nrzi('¯|___|¯¯¯¯¯|___|¯|_|¯');
// console.log(result3 === '010010000100111') // '010010000100111';