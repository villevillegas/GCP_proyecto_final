const Firestore = require('@google-cloud/firestore');
const admin = require('firebase-admin');

// [START firestore_deps]
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// [END firestore_deps]

/*const db = new Firestore({
  projectId: 'final-project-465717',
  keyFilename: '/path/to/keyfile.json',
});
*/


async function addDocument(db) {
    // [START firestore_data_set_id_random_collection]
    // Add a new document with a generated id.
    const res = await db.collection('cities').add({
      name: 'Tokyo',
      country: 'Japan'
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


const app = admin.initializeApp();

app.post('/register', async (req, res) => {
  const { phone, amount } = req.body;
  await admin.firestore().collection('charges').add({ phone, amount, date: new Date() });
  //await axios.post('http://<k8s-service-domain>/updateBalance', { phone, amount });
  res.send('Charge registered');
});