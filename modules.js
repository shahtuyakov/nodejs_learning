// Modules
// Modules - Enscapsulated Code (only shares minimum)
// Every file is modules in Node


// const john = 'john';
// const peter = 'peter';

// const sayHi = (name) => {
//     console.log(`hi there ${name}`);
// }

// sayHi('sean');
// sayHi(john);
// sayHi(peter); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////


const names = require('./names'); // при помощи require мы получаем обект с дынными другого файла name.js 
const sayHi = require ('./utils'); // мы получили доступ к функции из файла utils.js

// console.log(names);
// console.log(sayHi);

// sayHi('Sean')
// sayHi(names.peter);
// sayHi(names.john);

/////////////////////////////////////////////////////////////////////////////////

require('./mind_grenade') // можно также вызвать функцию из другого файла чтобы она выбла вызвана в оригинальном файле

////////////////////////////////////////////////////////////////////////////////


 


















