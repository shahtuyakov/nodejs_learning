const http = require('http') // вызываем модуль http

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Welcome home');
    }
    else if (req.url === '/about'){
        res.end('This page about company');
    }
    // res.end('Wrong adress')
    // res.write('Welcome');
    else {
        res.end('Wrong Adress');
    }
})

server.listen(5000)



