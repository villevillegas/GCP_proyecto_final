const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {

  res.send('Hello from Service A!');

});

app.get('/ventas', (req, res) => {

  res.send('Hola servicio de ventas en A!');

});


app.listen(port, () => {

  console.log(`Service A running on port ${port}`);

});