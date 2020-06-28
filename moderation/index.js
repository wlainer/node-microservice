const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {

})

app.listen(4003, () => console.log('Listeing on 4003'))
