
const express = require ('express')
const db = require("./db/connection.js")

// handling errors
const createError = require('http-errors')
// ********************
const app = express()
const port = 8080

const router = require("./routes/index.js")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",router)

// error handling
app.use((req,res,next)=>{
    next(createError(404,"End-point not found "))
})
app.use((req,res,next)=>{
    next(createError(400,"Bad request"))
})

db 
.then(()=>{
    console.log("connected to database")
    const server = app.listen(port,()=>{console.log(`listening in port ${port}`) })
})
.catch((error)=>{
    console.log(error)
})

app.get("/",(req,res)=>{
    res.send("testing")
})
