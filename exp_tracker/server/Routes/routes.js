const routes=require('express').Router()
const controller=require('../controller/controller')

require('/PROJECTS/Expense tracker/exp_tracker/server/controller/controller')

routes.route('/api/categories')
.post(controller.createCategories)
.get(controller.getCategories)


routes.route('/api/transactions')
.post(controller.postTransaction)
.get(controller.getTransaction)
.delete(controller.DeleteTransaction)


routes.route('/api/labels')
.get(controller.getLabels)

module.exports=routes