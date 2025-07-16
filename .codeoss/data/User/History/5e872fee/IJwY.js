const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'YOUR_PROJECT_ID'
});

async function addDocument(db) {
    // [START firestore_data_set_id_random_collection]
    // Add a new document with a generated id.
    const res = await db.collection('charges').add({
      phone: '12565489',
      amount: 250
    });
  
    console.log('Added document with ID: ', res.id);
    // [END firestore_data_set_id_random_collection]
  
    console.log('Add: ', res);
}
  
async function addDocumentWithId(db) {
    const data = {foo: 'bar '};
  
    // [START firestore_data_set_id_specified]
    await db.collection('cities').doc('new-city-id').set(data);
    // [END firestore_data_set_id_specified]
}

app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

app.get('/', (req, res) => {

  res.send('Hello from registration_service!');

});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Hello from registration_service /register!');

});


app.listen(port, () => {

  console.log(`Service A running on port ${port}`);

});