const mongoose = require('mongoose')

const commandSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId ,
        ref:"Client"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId ,
        ref:"User"
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId ,
        ref:"Product"
    }],
    type_payment: {
        type : String,
        required : true 
    },
    montant_recu: {
        type : Number,
        required : true
    },
    montant_rendu : {
        type : Number,
        required : true
    }
    ,
    montant_total : {
        type : Number,
        required : false
    }
},
{
timestamps: true,
})

module.exports = mongoose.model("Commmand", commandSchema);