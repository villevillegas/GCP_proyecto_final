const Firestore = require('@google-cloud/firestore');
const admin = require('firebase-admin');

// [START firestore_deps]
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// [END firestore_deps]

const db = new Firestore({
  projectId: 'final-project-465717',
  keyFilename: '/path/to/keyfile.json',
});

const debug = require('debug')('firestore-snippets-node');


const app = admin.initializeApp();

app.post('/register', async (req, res) => {
  const { phone, amount } = req.body;
  await admin.firestore().collection('charges').add({ phone, amount, date: new Date() });
  //await axios.post('http://<k8s-service-domain>/updateBalance', { phone, amount });
  res.send('Charge registered');
});