const Users = require("../models/users.model")
const bcrypt = require("bcrypt")
//MODULE POUR VERIFIER SI L'ID EXISTE
const verifiedID = require("mongoose").Types.ObjectId


// lister les utilisateurs 
module.exports.usersList = async (req, res) => {
    try {
    const users = await Users.find()
    res.status(200).json(users);
    } catch (err) {
    res.status(500).send({ message: err });
    }
}

//poster un utilisateurs
module.exports.userPost = async (req, res) => {
    const { login, email, password,role} = req.body;
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    if( await Users.findOne({login: login }) || await Users.findOne({email: email }))
    {return res.status(208).send({message : 'login ou email exist deja'})}
    const user = await Users.create({login, email, password:hash, role})
    res.status(201).json(user)
}



// suprimer un utilisation 
module.exports.deleteUser = async (req, res) => {
        if (!verifiedID.isValid(req.params.id))
        return res.status(404).send({ message: `INVALID ${req.params.id}` });
        else{
        await Users.deleteOne({ _id: req.params.id }).exec();
        return res.status(200).send({ message: "Supprimer avec succés!" });
        }
}

// MAJ utilisateur
module.exports.updateUser = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
        console.log(`INVALID ID : ${req.params.id}`);
    try {
        await Users.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
            login: req.body.login,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role,
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
