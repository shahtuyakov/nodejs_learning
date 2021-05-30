 /*
    Асинхронная операция продолжает выполняться несмотря на то что предедущая не закончила свое действие
    используется с колбеками преимущества с sync в том что ему не нужно ждать паолнение операции а вместо
    этого сразу переходит к след операции

 */
 
 const { readFile, writeFile } = require('fs') // получаем модуль sf
console.log('start');

 readFile('./content/first.txt', 'utf8', (err, res) =>{
     if (err){
         console.log(err);
         return;
     }
     // console.log(res);
     const first = res;
     readFile('./content/second.txt', 'utf8', (err, res) => {
         if (err){
             console.log(err);
             return;
         }
         const second = res;
 
         writeFile('./content/resfile.txt', `here is ${first} and ${second} yooo`, (err, res) => {
             if (err){
                 console.log(err);
                 return;
             }
             console.log('done with this task');
         })
 
     })
 })
 
 console.log('waitng next one');
 
 