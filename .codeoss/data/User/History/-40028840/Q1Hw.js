/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const ingressEndpoint = 'https://sell-registration-service-128392773449.us-central1.run.app/charges';
app.listen(port, () => {
  console.log('Listening on port', port);
});

app.post('/', async (req, res) => {
  const newPhoneCharge = decodeBase64Json(req.body.message.data);
  try {
    console.log("new recharge");
    console.log(newPhoneCharge);
    console.log("req");
    console.log(req.body.message);
    /*console.log(`Email Service: Report ${newPhoneCharge.id} trying...`);
    sendEmail();
    console.log(`Email Service: Report ${labReport.id} success :-)`);*/
    /*try {
      // Forward the message to the Ingress endpoint
      await axios.post(ingressEndpoint, JSON.parse(newPhoneCharge.toString()), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(`Message successfully forwarded to ${ingressEndpoint}`);
  
      // Acknowledge the message
      message.ack();
  
    } catch (error) {
      console.error(`Error forwarding message to ${ingressEndpoint}:`, error);
      // If forwarding fails, you might want to NACK the message to retry (optional)
      // message.nack(); // Uncomment to NACK the message
      message.ack(); // Acknowledge the message even if forwarding fails (for now)
    }


    res.status(204).send();
  }
  catch (ex) {

    console.log(`Email Service: Report ${newPhoneCharge} failure: ${ex}`);
    res.status(500).send();
  }
})

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, 'base64').toString());
}

*/
const { PubSub } = require('@google-cloud/pubsub');
const axios = require('axios');

// Creates a client
const pubsub = new PubSub();

const subscriptionName = 'phone-refill-subscription'; // Choose a unique subscription name
const topicName = 'phone_refill_topic';
const ingressEndpoint = 'YOUR_INGRESS_ENDPOINT'; // Replace with your Ingress endpoint

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

// Create a subscription if it doesn't exist
async function createSubscription() {
  try {
    await pubsub.topic(topicName).createSubscription(subscriptionName);
    console.log(`Subscription ${subscriptionName} created.`);
  } catch (error) {
    if (error.code === 6) {
      console.log(`Subscription ${subscriptionName} already exists.`);
    } else {
      console.error(`Error creating subscription: ${error}`);
    }
  }
}

createSubscription();

// Message handler
const messageHandler = async message => {
  console.log(`Received message: ${message.data.toString()}`);

  try {
    // Forward the message to the Ingress endpoint
    await axios.post(ingressEndpoint, JSON.parse(message.data.toString()), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(`Message successfully forwarded to ${ingressEndpoint}`);

    // Acknowledge the message
    message.ack();

  } catch (error) {
    console.error(`Error forwarding message to ${ingressEndpoint}:`, error);
    // If forwarding fails, you might want to NACK the message to retry (optional)
    // message.nack(); // Uncomment to NACK the message
    message.ack(); // Acknowledge the message even if forwarding fails (for now)
  }
};

// Listen for new messages
subscription.on('message', messageHandler);

// Listen for errors
subscription.on('error', error => {
  console.error('Received error:', error);
  process.exit(1);
});

console.log(`Listening for messages on ${subscriptionName}`);

