const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

app.get('/', (req, res) => {

  res.send('Hello from registration_service!');

});

app.get('/register', (req, res) => {

  res.send('Hello from registration_service /register!');

});


app.listen(port, () => {

  console.log(`Service A running on port ${port}`);

});