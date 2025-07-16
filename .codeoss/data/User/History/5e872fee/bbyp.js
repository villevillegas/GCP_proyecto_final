/*const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const Firestore = require('@google-cloud/firestore');



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

app.post('/register', async (req, res) => {
    console.log(req.body);

    const db = new Firestore({
        projectId: 'final-project-465717'
    });

    await addDocument(db);
    await addDocumentWithId(db);


    res.send('Hello from registration_service /register!');

});


app.listen(port, () => {

  console.log(`Service A running on port ${port}`);

});*/

const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

// Configura body-parser para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Inicializa Firestore
const db = new Firestore({
  projectId: 'final-project-465717', // Reemplaza con tu ID de proyecto
  databaseId: 'phone-recharges' // Especifica el nombre de la base de datos
  // Si estás en Google Cloud (Cloud Run, etc.), no necesitas keyFilename
  // keyFilename: '/path/to/your/keyfile.json', // Solo necesario localmente
});

app.post('/charges', async (req, res) => {
  try {
    const { phone_number, amount } = req.body;

    // Valida que phone_number y amount estén presentes
    if (!phone_number || !amount) {
      return res.status(400).send({ error: 'Se requieren phone_number y amount.' });
    }

    // Valida que amount sea un número
    if (typeof amount !== 'number') {
      return res.status(400).send({ error: 'Amount debe ser un número.' });
    }

    // Crea el objeto de cargo
    const charge = {
      phone_number: phone_number,
      amount: amount,
      timestamp: Firestore.FieldValue.serverTimestamp() // Agrega un timestamp del servidor
    };

    // Guarda el cargo en la colección 'charges'
    const docRef = db.collection('charges').doc(); // Crea un nuevo documento con ID automático
    await docRef.set(charge);

    console.log('Cargo guardado con ID:', docRef.id);
    res.status(201).send({ id: docRef.id, message: 'Cargo guardado correctamente.' });

  } catch (error) {
    console.error('Error al guardar el cargo:', error);
    res.status(500).send({ error: 'Error al guardar el cargo.' });
  }
});

app.listen(port, () => {
  console.log(`Microservicio escuchando en el puerto ${port}`);
});