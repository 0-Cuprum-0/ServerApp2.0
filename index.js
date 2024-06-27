const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 5000;
const DB_URL = 'mongodb+srv://root:root@cluster0.ymkogdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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
    console.log("БД успешно подключена...")
    }catch(error){
        console.log(error)

    }
}
startServer()



   



