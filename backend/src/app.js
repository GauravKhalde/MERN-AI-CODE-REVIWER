const express = require ('express')
const aiRoutes = require('./routes/ai.routes')
const app = express()  // server is cretaed with express appliation
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hellow word')
})

app.use('/ai',aiRoutes)


module.exports= app