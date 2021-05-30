const http = require('http') // вызываем модуль http

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome home');
    }
    if (req.url === '/about'){
        res.end('This page about company');
    }
    // res.end('Wrong adress')
    // res.write('Welcome');
    res.end();
})

server.listen(5000)



