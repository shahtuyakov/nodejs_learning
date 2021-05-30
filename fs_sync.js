// синхранизация это когда код выполняется по этапно по очередно. 


const { readFileSync, writeFileSync} = require('fs'); // получаем модуль sf
console.log('start'); // первая операция

const first = readFileSync('./content/first.txt', 'utf8'); // можно считать содержимое файла 
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

writeFileSync('./content/resfile.txt', `here is new file: ${first}, ${second}`,) // здесь мы можем создать новый файл 
//в который мы можем вписать данные из других файлов// 1 параметр наз файла которое мы хотим создать 2 парам это
// то что мы хотим вставить внутри этого файла 

console.log('done with task'); // вторая операция 
console.log('waiting next one'); // конец



