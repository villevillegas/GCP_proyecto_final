const express = require('express');
const { Firestore } = require('@google-cloud/firestore');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configure body-parser to analyze the body of requests as JSON
app.use(bodyParser.json());

// Initialize Firestore
const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID', // Replace with your project ID
  databaseId: 'phone-recharges' // Specify the database name
  // If you're on Google Cloud (Cloud Run, etc.), you don't need keyFilename
  // keyFilename: '/path/to/your/keyfile.json', // Only needed locally
});

app.post('/updateBalance', async (req, res) => {
  try {
    const { phone_number, amount } = req.body;

    // Validate that phone_number and amount are present
    if (!phone_number || !amount) {
      return res.status(400).send({ error: 'phone_number and amount are required.' });
    }

    // Validate that amount is a number
    if (typeof amount !== 'number') {
      return res.status(400).send({ error: 'amount must be a number.' });
    }

    // Get a reference to the balance document for this phone number
    const balanceRef = db.collection('balance').doc(phone_number);
    const balanceDoc = await balanceRef.get();

    if (!balanceDoc.exists) {
      // If the balance document doesn't exist, create it
      console.log(`Creating new balance document for ${phone_number}`);
      await balanceRef.set({
        phone_number: phone_number,
        balance: amount,
        last_updated: Firestore.FieldValue.serverTimestamp()
      });
    } else {
      // If the balance document exists, update the balance
      const currentBalance = balanceDoc.data().balance || 0;
      const newBalance = currentBalance + amount;

      console.log(`Updating balance for ${phone_number} from ${currentBalance} to ${newBalance}`);

      await balanceRef.update({
        balance: newBalance,
        last_updated: Firestore.FieldValue.serverTimestamp()
      });
    }

    console.log(`Balance updated successfully for ${phone_number}`);
    res.status(200).send({ message: 'Balance updated successfully.' });

  } catch (error) {
    console.error('Error updating balance:', error);
    res.status(500).send({ error: 'Error updating balance.' });
  }
});

app.listen(port, () => {
  console.log(`Balance service listening on port ${port}`);
});