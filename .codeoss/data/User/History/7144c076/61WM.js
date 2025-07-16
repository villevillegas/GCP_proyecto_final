const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'final-project-465717',
  keyFilename: '/path/to/keyfile.json',
});

