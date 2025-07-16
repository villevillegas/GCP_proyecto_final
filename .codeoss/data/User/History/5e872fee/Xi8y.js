const Firestore = require('@google-cloud/firestore');
const admin = require('firebase-admin');

const db = new Firestore({
  projectId: 'final-project-465717',
  keyFilename: '/path/to/keyfile.json',
});



admin.initializeApp();

app.post('/register', async (req, res) => {
  const { phone, amount } = req.body;
  await admin.firestore().collection('charges').add({ phone, amount, date: new Date() });
  await axios.post('http://<k8s-service-domain>/updateBalance', { phone, amount });
  res.send('Charge registered');
});