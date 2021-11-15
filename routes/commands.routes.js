const router = require("express").Router()
const commandsControllers = require("../controllers/commands.controllers")


router.get('/commandsList', commandsControllers.commandsList)
router.post('/:userId/commandPost', commandsControllers.commandPost)
router.delete('/deletecommand/:id', commandsControllers.deleteCommand)
router.put('/updatecommand/:id', commandsControllers.updateCommand)



module.exports = router