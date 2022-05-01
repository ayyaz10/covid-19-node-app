const express = require('express');
const knex = require('knex');
const cors = require('cors');
const app = express();


const db = knex({
  client: 'pg',
  connection: {
   host: '127.0.0.1',
   user: 'postgres', 
   password: '1231',
   database: 'api-db' 
  }
})

app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.send('working')
})

app.post('/patients', (req, res) => {
  console.log(req.body)
})

app.put('/patients/:id', (req, res) => {
  console.log(req.query)
})

app.delete('/patients/:id', async (req, res) => {
  const patientId = req.params.id;
  try {
    // const res = await deletePatient(patientId);
  } catch (error) {
    
  }
})



const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Listning at ${PORT}`)
})