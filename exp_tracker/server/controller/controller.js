const model=require('../models/model')

//POST REQ TO api/categories
async function createCategories(req,res){
   const{type,color}=req.body
    const Create=await model.category({
        type,
        color
    })

    Create.save().then(res.json(Create)).catch(err=>{console.log(err)})
}
//GET REQ TO api/categories
async function getCategories(req,res){
    const  data=await model.category.find({})
   return res.json(data)
}

//POST REQ TO api/transactions

async function postTransaction(req,res){

    const{name,type,amount}=req.body

    const transData= await model.transaction({
       name,
       type,
       amount
    })

    transData.save().then(res.json(transData)).catch(err=>{console.error(err).json("Error while running postTransaction")})
}

//GET REQ TO api/transactions

async function getTransaction(req,res){
    const transData=await model.transaction.find({})

    return res.json(transData)

}

//DELETE REQ TO api/transactions

async function DeleteTransaction(req,res){
    const{_id}= req.body
    await model.transaction.deleteOne({_id})
   return res.json(`Entry with id ${_id} deleted`)
}


// GET REQ TO api/labels
async function getLabels(req, res){

    model.transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
        


    ]).then(result => {
        let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}





module.exports={createCategories,
    getCategories,
    postTransaction,
    getTransaction,
    DeleteTransaction,
    getLabels
}