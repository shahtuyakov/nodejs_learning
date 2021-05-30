// shareable
const john = 'john';
const peter = 'peter';

// local
const secret = 'Top secret'; // этот переменнвя доступна только внутри этого файла


module.exports = {john, peter}; // при помощи module.exports мы открываем доступ к данным которыми мы шеримся

/*
Также можно module.exports писать в таком виде

const Items = ['item1', 'item2', ....]
module.exports.items = ['item1', 'item2', ...]

const person = {
    name: Bob,
}
module.exports.SinglePerson = person

*/




