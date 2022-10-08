const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route');
const app = express();

app.use(bodyParser.json());

// let url = "mongodb+srv://tannmayhedau619:Tanmay%40619@cluster0.fw1xhuw.mongodb.net/group2Database";
let url =
  "mongodb+srv://ishaan:ishaan007@cluster1.wumfpap.mongodb.net/?retryWrites=true&w=majority";
let port = process.env.PORT || 3000;


mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function () {
  console.log("Express app running on port " + port);
});