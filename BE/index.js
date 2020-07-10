const express= require('express')
const app=express()
const configureDB=require('./config/database')
configureDB()

const routes=require('./config/routes')
const port=3060

app.use(express.json())
app.use('/',routes)

app.listen(port,()=>{
    console.log('listen on port', port)
})
