const http = require('http');
const https = require('https');
const express = require('express');

//Обьявляю переменные
var rank = '';
var x = '';
var currency = '';
var app = express();
var priceUsd = '';

const server = http.createServer((_req, res) => {      // создаем инстанс класса http.Server
      // при запросе к localhost:3000 выполнится этот колбэк    
         res.writeHead(200, { 'Content-Type': 'text/plain' });   
            // опции запроса к удаленному серверу
         const options = {
        host: 'api.coincap.io',
        path: '/v2/assets?',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
  
       https.request(options, (response) => {  
        let str = '';
                 // данные грузятся не одним куском, а чанками
                      response.on('data', function (chunk) {   
            str += chunk;        });        
        response.on('end', function () {
            const { priceUsd } = JSON.parse(str).data[id-1]; // получаем preiceUsd из ответа
            
            res.end('"usd": ', priceUsd);  // отправляем ответ тому, кто обратился к localhost:3000
        });
        const app = express()
app.get('/', function (request, response) {
  response.send('Курc')
});
app.use('/rates':id, function (request, response) {

  let id = request.query.currency
  
  let PriceUsd = request.query.PriceUsd
  
  response.send(
    'Инфо id=' +
      currency +
      'PriceUsd=' +
      PriceUsd +
      ' '  )
});
    }).end();  // вызываю функцию
  });
server.listen(3000, '127.0.0.1');
