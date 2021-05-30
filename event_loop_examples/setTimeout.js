// start operating system 
console.log('first');

setTimeout(() => {
    console.log('second');
}, 0); // ИДЕТ В КОНЕЦ ОЧЕРЕДИ ПРИ ВЫПОЛНЕНИИ async action

console.log('third');
// completed and exited operating process