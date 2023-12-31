const express=require('express')
const app=express()
const cors=require('cors')


require('dotenv').config({path:'./config.env'})

const port=process.env.PORT||5000
//Middlewares
app.use(cors())
app.use(express.json())
app.use(require('./Routes/routes'))

const conn=require('./db/connection')

conn.then(db=>{
    if(!db)return process.exit(1)

    //listen to server
    app.listen(port ,()=>{

        console.log(`server is running on port:${port}`)
    })
    
    app.on('error',err=>{console.log("error")})

}).catch(err=>{console.log("error while connecting database")})

