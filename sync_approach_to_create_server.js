/*
    В этом примере мы разматриваем sync написание кода
    Когда срабатывает блокинг код все остальные страницы сайта ждут пока закончит операцию то страницы которая
    имеет BLOCKING CODE 
    
*/

const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home page')
    }
    else if (req.url === '/about'){
        // BLOCKING CODE
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                // console.log(`${i} ${j}`);
            }
        }
        res.end('Page about us')
    }
    else {
        res.end('Wrong adress');
    }
})


server.listen(5000, () => {
    console.log('Server listening 5000...');
})