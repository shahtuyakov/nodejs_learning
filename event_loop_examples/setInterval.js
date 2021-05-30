setInterval(() => {
    console.log('hello world');
}, 2000); // async action 

console.log('I will run first');

// process stays alive unless
// Kill proces ctrl + c 
// unexpected error