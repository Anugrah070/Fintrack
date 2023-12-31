const mongoose=require('mongoose')

const Schema=mongoose.Schema

const categories_Schema=new Schema({
    type:{type:String,default:'Investment'},
    color:{type:String,default:'#FCBE44'}
})

const transaction_Schema=new Schema({
    name:{type:String,default:'John Doe'},
    type:{type:String,default:'Investment'},
    amount:{type:Number}

})

const category=mongoose.model('category',categories_Schema)
const transaction=mongoose.model('transaction',transaction_Schema)

module.exports={category,transaction}