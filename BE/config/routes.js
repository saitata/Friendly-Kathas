const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const customersController=require('../app/controllers/customersController')


router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)


router.get('/customers/account',authenticateUser, customersController.list )
router.post('/customers',authenticateUser, customersController.create)
router.get('/customers/:id',authenticateUser, customersController.show)
router.put('/customers/:id',authenticateUser, customersController.update)
router.delete('/customers/:id',authenticateUser,customersController.destroy)


module.exports = router