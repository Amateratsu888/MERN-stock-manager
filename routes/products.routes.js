const router = require('express').Router()
const productsControllers = require('../controllers/products.controllers')


router.get('/productsList', productsControllers.productsList)
router.post('/productPost', productsControllers.productPost)
router.delete('/deleteProduct/:id', productsControllers.deleteProduct)
router.put('/updateProduct/:id', productsControllers.updateProduct)




module.exports = router