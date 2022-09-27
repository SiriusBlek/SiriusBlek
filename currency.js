const http = require('http');

const https = require('https');

const express = require('express');

var rank = '';

const server = http.createServer((_req, res) => {
         res.writeHead(200, { 'Content-Type': 'text/plain' }); 
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
        
              response.on('data', function (chunk) {
            str += chunk;        });        
        response.on('end', function () {
            const { priceUsd } = JSON.parse(str).data[id-1]; 
            
            res.end('"usd": ', priceUsd); 
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
    }).end();
  });
server.listen(3000, '127.0.0.1');
