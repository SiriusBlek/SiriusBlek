const http = require('http');
const https = require('https');
const express = require('express');
const url = 'https://api.coincap.io/v2/assets?';


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
  
  

async function getPrice(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.coincap.io/v2/assets?${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(PriceUsd);
  
    return results;
  }
