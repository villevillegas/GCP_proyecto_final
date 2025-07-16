const { Firestore } = require('@google-cloud/firestore');

exports.updateBalance = async (snap, context) => {
  // Initialize Firestore
  const db = new Firestore({
    projectId: 'final-project-465717', // Replace with your project ID
    databaseId: 'phone-recharges' // Specify the database name
  });

  const chargeId = snap.id; // ID of the new charge document
  const chargeData = snap.data(); // Data from the new charge document
  const phoneNumber = chargeData.phone_number;
  const amount = chargeData.amount;

  console.log(`Charge processed: ${chargeId} for ${phoneNumber} with amount ${amount}`);

  try {
    // Get a reference to the balance document for this phone number
    const balanceRef = db.collection('balance').doc(phoneNumber);
    const balanceDoc = await balanceRef.get();

    if (!balanceDoc.exists) {
      // If the balance document doesn't exist, create it
      console.log(`Creating new balance document for ${phoneNumber}`);
      await balanceRef.set({
        phone_number: phoneNumber,
        balance: amount, // Initial balance is the charge amount
        last_updated: Firestore.FieldValue.serverTimestamp()
      });
    } else {
      // If the balance document exists, update the balance
      const currentBalance = balanceDoc.data().balance || 0; // Default to 0 if balance is missing
      const newBalance = currentBalance + amount;

      console.log(`Updating balance for ${phoneNumber} from ${currentBalance} to ${newBalance}`);

      await balanceRef.update({
        balance: newBalance,
        last_updated: Firestore.FieldValue.serverTimestamp()
      });
    }

    console.log(`Balance updated successfully for ${phoneNumber}`);
    return null; // Cloud Functions must return a value or promise

  } catch (error) {
    console.error('Error updating balance:', error);
    return null; // Important:  Still return null to avoid retries if the error is unrecoverable
  }
};