const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const url = 'https://5f2364f5-1e36-4a45-b6ec-6997db178182-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks';
const token = 'AstraCS:UHXhWRopUJBONnQeQTnpLXeT:87211e9d678e56b5f7d1784ceb0131d4a2d0081fd6b7c42d401e5bcbfc4df2e4';

app.get('/tickets', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    }
  }

  try {
    const response = await axios(`${url}?page-size=20`, options)
    res.status(200).json({message: err})
  } catch {
    console.log(err)
    res.status(500).json({messge: err})
  }

})

app.post('/tickets', async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
      'Content-Type': 'application/json'
    },
    data: formData
  }

  try {
    const response = await axios(url, options);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err})
  }

})

app.delete('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId

  const options = {
    method: 'DELETE',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token
    }
  }

  try {
    const response = await axios(`${url}/${id}`, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err})
  }

})

app.listen(PORT, () => console.log('server running on PORT' + PORT));