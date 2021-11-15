const router = require('express').Router()
const logInOutControllers = require('../controllers/logInOut.controllers')



router.post('/loginPost', logInOutControllers.loginPost)
router.get('/logout', logInOutControllers.logOutGet)


module.exports = router