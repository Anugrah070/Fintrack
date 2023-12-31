const mongoose=require('mongoose')
const conn =mongoose.connect(process.env.URI)

conn.then(db=>{console.log("database connected")}).catch(error=>{"connection error"})

module.exports=conn