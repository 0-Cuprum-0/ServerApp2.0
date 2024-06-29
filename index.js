const express = require('express')
const mongoose = require('mongoose')
const Item = require('./models/item-model')

const app = express()
const PORT = 5173;
const DB_URL = 'mongodb+srv://root:root@cluster0.ymkogdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


app.use(express.json())
const options = {
    dbName: "DB"
}
const startServer = ()=>{
    try{
    
    app.listen(PORT, () => {
        console.log(`Server listened on port ${PORT}`)
    })
    mongoose.connect(DB_URL, options)
    console.log("DB was sucsessfully connected")
    }catch(error){
        console.log(error)

    }
    

  










}
startServer()



   



