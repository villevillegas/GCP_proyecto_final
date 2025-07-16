const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {

  res.send('Hello from registration_service!');

});

app.get('/register', (req, res) => {

  res.send('Hello from registration_service!');

});


app.listen(port, () => {

  console.log(`Service A running on port ${port}`);

});