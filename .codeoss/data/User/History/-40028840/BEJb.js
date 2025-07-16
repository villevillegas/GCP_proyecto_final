const express = require('express');
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
    try {
      // Forward the message to the Ingress endpoint
      await axios.post(ingressEndpoint, JSON.parse(newPhoneCharge.toString()), {/*JSON.parse(newPhoneCharge.toString()*/
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






