const Products= require("../models/products.model")

//MODULE POUR VERIFIER SI L'ID EXISTE
const verifiedID = require("mongoose").Types.ObjectId


// lister les produits
module.exports.productsList = async (req, res) => {
    try {
    const products = await Products.find()
    res.status(200).json(products);
    } catch (err) {
    res.status(500).send({ message: err });
    }
}

//poster un produit
module.exports.productPost = async (req, res) => {
try{
    
    const { product_name, product_mark, product_cat,price,qte,expired_date} = req.body;
    const product = await Products.create({ product_name, product_mark, product_cat,price,qte,expired_date})
    res.status(201).json(product)
}catch (err) {
    res.status(500).send({ message: err });
    }
}

// suprimer un produit
module.exports.deleteProduct = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
    return res.status(404).send({ message: `INVALID ID ${req.params.id}` });
    else{
    await Products.deleteOne({ _id: req.params.id }).exec();
    return res.status(202).send({ message: "Supprimer avec succés!" });
    }
}

// MAJ produit
module.exports.updateProduct = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
        console.log(`INVALID ID : ${req.params.id}`);
    try {
        await Products.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
            product_name: req.body.product_name,
            product_mark: req.body.product_mark,
            product_cat: req.body.product_cat,
            price:req.body.price,
            qte:req.body.qte,
            expired_date:req.body.expired_date,
            },
        },
        { new: true },
        (err, data) => {
            if (!err) res.status(200).json(data);
            else res.status(500).send({ message: err });
        }
        ).clone()
    } catch (err) {
        console.log(err);
    }
    };
