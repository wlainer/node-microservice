const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  console.log('Received Event ', req.body.type)

  if (req.body.type === 'CommentCreated') {
    const data = req.body.data
    const status = data.content.includes('orange') ? 'reject' : 'approved'

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
  }


  res.status(200).send({})
})

app.listen(4003, () => console.log('Listeing on 4003'))
