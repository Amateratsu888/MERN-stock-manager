const router = require("express").Router()
const checkLogin =require ("../middleware/checkLogin")
const { application } = require("express")
const clientsControllers = require("../controllers/clients.controllers")


router.get('/clientsList', clientsControllers.clientsList)
router.post('/clientPost', clientsControllers.clientPost)
router.delete('/deleteClient/:id', clientsControllers.deleteClient)
router.put('/updateClient/:id', clientsControllers.updateClient)



module.exports = router