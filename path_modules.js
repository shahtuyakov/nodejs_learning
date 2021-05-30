

const path = require('path');
// console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'text.txt'); // создается путь к файлу
console.log(filePath);


const base = path.basename(filePath); // получаем конечный файл по filePath пути
console.log(base);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt'); // вытаскивает полную длину пути файла
console.log(absolute);


