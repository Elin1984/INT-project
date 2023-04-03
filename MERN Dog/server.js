const {MongoClient} = require ("mongodb")
const express = require ("express")
let 

const app = express()

app.get("/",(req,res)=>{
    res.send ("Welcome to the Dog's world")
})

app.get("/admin",(req,res)=>{
    res.send("Top secret admin page")

})

async function start() {
    const Client = new MongoClient ("mongodb://root:root@localhost:27017/MernDogApp?&authSource=admin")
    await Client.connect()
    Client.db()
    
}
start()

app.listen(3000)

