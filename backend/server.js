const express = require('express')
require('dotenv').config()
require('./database')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')

app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(4000,()=>(console.log("listening on port 4000")))