
const Commands = require("../models/commands.model")


//MODULE POUR VERIFIER SI L'ID EXISTE
const verifiedID = require("mongoose").Types.ObjectId


// lister les commandes
module.exports.commandsList = async (req, res) => {
    try {
    const commands = await Commands.find().populate("product").populate("client")
    res.status(200).json(commands);
    } catch (err) {
    res.status(500).send({ message: err });
    }
}

//poster les commandes 
module.exports.commandPost = async (req, res) => {
    const { client, product, type_payment,montant_recu, montant_rendu,montant_total} = req.body;
    const userId = req.params.id
    try {
        const command = await new Commands({ client, user:userId, product, type_payment,montant_recu, montant_rendu,montant_total})
        const saveCommand = await command.save()
        res.status(201).json(saveCommand)
    } catch (error) {
        res.status(500).send({message:error})
    }
}



// suprimer un utilisation 
module.exports.deleteCommand = async (req, res) => {
        if (!verifiedID.isValid(req.params.id))
        return res.status(404).send({ message: `INVALID ${req.params.id}` });
        else{
        await Commands.remove({ _id: req.params.id }).exec();
        return res.status(200).send({ message: "Supprimer avec succés!" });
        }
}

// MAJ utilisateur
module.exports.updateCommand = async (req, res) => {
    const { client, product, type_payment,montant_recu, montant_rendu,montant_total} = req.body;
    if (!verifiedID.isValid(req.params.id))
        console.log(`INVALID ID : ${req.params.id}`);
    try {
        await Commands.findByIdAndUpdate(
        { _id: req.params.commandId },
        {
            $set: {
            client,
            product,
            type_payment,
            montant_recu,
            montant_rendu,
            montant_total
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
