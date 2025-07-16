const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port', port);
});

app.post('/', async (req, res) => {
  try {
    const recharge_app = req.body;
    await publishPubSubMessage(recharge_app);
    res.status(204).send();
  }
  catch (ex) {
    console.log(ex);
    res.status(500).send(ex);
  }
})

async function publishPubSubMessage(recharge_app) {
  const buffer = Buffer.from(JSON.stringify(labReport));
  await pubsub.topic('phone_refill_topic').publish(buffer);
}