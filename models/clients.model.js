const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    client_name : {
        type:String,
        required:true
    },
    client_prenom :{
        type: String,
        required : true
    },
    client_phone : {
        type: Number,
        required : false
    },
    client_address : {
        type : String,
        required : false 
    }
},
{
timestamps: true,
})

module.exports = mongoose.model("Client", clientSchema);