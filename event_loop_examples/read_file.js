const { readFile } = require('fs')

// async метод 

console.log('start a first task');

// check file path

readFile('../content/first.txt', 'utf8', (err, res) => {
    if (err){
        return;
    }
    console.log(res);
    console.log('completed first task');
})

console.log('waiting next task');

