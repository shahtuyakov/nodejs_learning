// npm - global command comes with node своего рода библиотека все модулей можно качать шериться 
// npm --version {-v} - узнаешь версию 

// local dependency - используются в локальном проекте
// npm i <packageName> - установка dependence
// npm uninstall <packageName> удаляет модуль
// npm install -g <packageName> - устанавливаем модули в глобальной видимости


// package.json - это файл в котором находятся все твои установочные npm также скрипты. Главная цель в том 
// что если ты будешь шериться проектом тот кто получил проект будет автоматически знать какие пакеты npm нужно
// будет установить

// npm init устанавливает все пакеты шаг за шагом
// npm init -y установить все пакеты по default
// npm {script_name} || (npm run {script_name}) - запускаем скрипт который записан в package.json


const _ = require('lodash') // вызываем модуль

const items = [1, [2, [3], [4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');


