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
const port = process.env.PORT || 3000;

// Configura body-parser para analizar el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Inicializa Firestore
const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID', // Reemplaza con tu ID de proyecto
  // Si estás en Google Cloud (Cloud Run, etc.), no necesitas keyFilename
  // keyFilename: '/path/to/your/keyfile.json', // Solo necesario localmente
});

app.post('/productos', async (req, res) => {
  try {
    const producto = req.body;

    // Valida que el producto tenga los campos necesarios (ejemplo)
    if (!producto.nombre || !producto.precio) {
      return res.status(400).send({ error: 'El producto debe tener nombre y precio.' });
    }

    // Guarda el producto en Firestore
    const docRef = db.collection('productos').doc(); // Crea un nuevo documento con ID automático
    await docRef.set(producto);

    console.log('Producto guardado con ID:', docRef.id);
    res.status(201).send({ id: docRef.id, message: 'Producto guardado correctamente.' });

  } catch (error) {
    console.error('Error al guardar el producto:', error);
    res.status(500).send({ error: 'Error al guardar el producto.' });
  }
});

app.listen(port, () => {
  console.log(`Microservicio escuchando en el puerto ${port}`);
});