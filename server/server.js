const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const api = require('./routes/api')
const app = express()
const cors = require('cors')
app.use(bodyParser.json())
app.use('/api', api)
app.use(cors())

app.get('/', function(req, res)
{
  res.send('hello')
})
app.listen(port, function(){
 console.log('Server Initialized on:' +port)
})
