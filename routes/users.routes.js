const router = require("express").Router()
const { application } = require("express")
const usersControllers = require("../controllers/users.controllers")


router.get('/usersList', usersControllers.usersList)
router.post('/userPost', usersControllers.userPost)
router.delete('/deleteUser/:id', usersControllers.deleteUser)
router.put('/updateUser/:id', usersControllers.updateUser)



module.exports = router