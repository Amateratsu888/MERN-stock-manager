const Clients = require("../models/clients.model")

//MODULE POUR VERIFIER SI L'ID EXISTE
const verifiedID = require("mongoose").Types.ObjectId


// lister les utilisateurs 
module.exports.clientsList = async (req, res) => {
    try {
    const clients = await Clients.find()
    res.status(200).json(clients);
    } catch (err) {
    res.status(500).send({ message: err });
    }
}

//poster un utilisateurs
module.exports.clientPost = async (req, res) => {
    const { client_name, client_prenom, client_phone,client_address} = req.body;
    if( await Clients.findOne({client_phone: client_phone }) )
    {return res.status(200).send({message : 'un client possede dejace numero de telephone'})}
    const client = await Clients.create({client_name, client_prenom, client_phone,client_address})
    res.status(201).json(client)
}



// suprimer un utilisation 
module.exports.deleteClient = async (req, res) => {
        if (!verifiedID.isValid(req.params.id))
        return res.status(404).send({ message: `INVALID ${req.params.id}` });
        else{
        await Clients.remove({ _id: req.params.id }).exec();
        return res.status(200).send({ message: "Supprimer avec succés!" });
        }
}

// MAJ utilisateur
module.exports.updateClient = async (req, res) => {
    if (!verifiedID.isValid(req.params.id))
        console.log(`INVALID ID : ${req.params.id}`);
    try {
        await Clients.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                client_name: req.body.client_name,
                client_prenom: req.body.client_prenom,
                client_phone: req.body.client_phone,
                client_address:req.body.client_address,
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
